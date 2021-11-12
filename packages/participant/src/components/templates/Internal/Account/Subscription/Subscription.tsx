import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { auth, services } from "@studyfind/firebase";

import { Grid, useToast } from "@chakra-ui/react";
import { Loader } from "components/atoms";
import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";
import { IconType } from "react-icons/lib";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

import SubscriptionView from "./SubscriptionView";
import SubscriptionForm from "./SubscriptionForm";

export type Period = "annually" | "monthly";
export type UserPlan = "FREE" | "STANDARD" | "PREMIUM";

export interface PlanData {
  icon: IconType;
  name: UserPlan;
  title: string;
  price: [string, string];
  features: string[];
  isPopular: boolean;
}

export interface PlanDetails {
  status?: any;
  amount?: any;
  current_period_end?: any;
  cancel_at_period_end?: any;
}

const getStripePriceID = (plan: UserPlan, period: Period) => {
  return {
    FREE: {
      annually: "",
      monthly: "",
    },

    STANDARD: {
      annually: "price_1JU1jwIzlngCzbHL32su7mlE",
      monthly: "price_1JU1jQIzlngCzbHLwgm0SVAe",
    },

    PREMIUM: {
      annually: "price_1JU1n4IzlngCzbHLAFMoPmtq",
      monthly: "price_1JU1mJIzlngCzbHLsYWJCSFm",
    },
  }[plan][period];
};

const plans: PlanData[] = [
  {
    icon: SiMicrosoft,
    name: "FREE",
    title: "Free",
    price: ["$0", "$0"],
    features: ["Create Study", "Recruit Participants", "Share Link"],
    isPopular: true,
  },
  {
    icon: SiMarketo,
    name: "STANDARD",
    title: "Standard",
    price: ["$99", "$79"],
    features: ["Participant Notes", "Participant Reminders", "Schedule Meetings"],
    isPopular: true,
  },
  {
    icon: SiHive,
    name: "PREMIUM",
    title: "Premium",
    price: ["$249", "$199"],
    features: ["Everything in Standard", "Instant Messaging", "Email and Text Notifications"],
    isPopular: false,
  },
];

interface Props {
  showButtons: boolean;
  handleCancel: React.MouseEventHandler;
  handleUpdate: () => Promise<void>;
}

function Subscription({ showButtons, handleCancel, handleUpdate }: Props) {
  const toast = useToast();
  const history = useHistory();
  const currentPlan: UserPlan = "FREE"; // TODO: use plan context here

  const [isBilledAnnually, setIsBilledAnnually] = useState(true);
  const [hasActivePlan, setHasActivePlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<UserPlan>("STANDARD");
  const [planDetails, setPlanDetails] = useState({});

  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  const { action } = useParams<{ action: "cancel" | "success" }>();

  const period = isBilledAnnually ? "annually" : "monthly";
  const selectedPriceID = getStripePriceID(selectedPlan, period);

  const retrieveUserPlanDetails = async () => {
    const snapshot = await services.firestore
      .collection("researchers")
      .doc(auth.getUser().uid)
      .collection("subscriptions")
      .where("status", "!=", "canceled")
      .limit(1)
      .get();

    if (snapshot.docs.length) {
      const planDetails = snapshot.docs[0].data();

      const status = planDetails.status;
      const amount = (planDetails.items[0].plan.amount / 100).toFixed(2);
      const current_period_end = planDetails.current_period_end;
      const cancel_at_period_end = planDetails.cancel_at_period_end;

      setHasActivePlan(true);
      setPlanDetails({
        status,
        amount,
        current_period_end: current_period_end.toDate(),
        cancel_at_period_end,
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    if (currentPlan !== "FREE") {
      retrieveUserPlanDetails();
    } else {
      setLoading(false);
    }
  }, [currentPlan]);

  const handleChangeBilledAnnually = (_: string, value: boolean) => {
    setIsBilledAnnually(value);
  };

  const handleSelectPlan = (name: UserPlan) => {
    setSelectedPlan(name);
  };

  const handleSubscribe = async () => {
    setRedirecting(true);

    const docRef = await services.firestore
      .collection("researchers")
      .doc(auth.getUser().uid)
      .collection("checkout_sessions")
      .add({
        price: selectedPriceID,
        trial_from_plan: true,
        allow_promotion_codes: true,
        success_url: window.location.origin + "/account/subscription/success",
        cancel_url: window.location.origin + "/account/subscription/cancel",
      });

    docRef.onSnapshot((snapshot) => {
      const session = snapshot.data();

      if (session?.error) {
        setRedirecting(false);
        toast({});
      }

      if (session?.url) {
        setRedirecting(false);
        window.location.assign(session?.url);
      }
    });
  };

  const handleManageSubscription = async () => {
    const FUNCTION_CODE = "ext-firestore-stripe-subscriptions-createPortalLink";
    const functionRef = services.functions.httpsCallable(FUNCTION_CODE);

    setRedirecting(true);

    const { data } = await functionRef({
      returnUrl: window.location.origin + "/account/subscription",
    });

    setRedirecting(false);

    window.location.assign(data.url);
  };

  useEffect(() => {
    if (action) {
      if (action === "cancel") {
        toast({});
      }

      if (action === "success") {
        auth.signout();
        toast({});
      }

      history.push("/account/subscription");
    }
  }, [action]);

  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <Grid gap="20px">
        <AccountHeader
          title="Subscription"
          description="Choose the plan that suits you best and click continue to enter your credit card details to purchase the desired plan"
        />
        {loading ? (
          <Loader height="300px" />
        ) : hasActivePlan ? (
          <SubscriptionView
            currentPlan={currentPlan}
            planDetails={planDetails}
            redirecting={redirecting}
            handleManageSubscription={handleManageSubscription}
          />
        ) : (
          <SubscriptionForm
            plans={plans}
            selectedPlan={selectedPlan}
            redirecting={redirecting}
            handleSubscribe={handleSubscribe}
            handleSelectPlan={handleSelectPlan}
            isBilledAnnually={isBilledAnnually}
            handleChangeBilledAnnually={handleChangeBilledAnnually}
          />
        )}
      </Grid>
    </AccountWrapper>
  );
}

export default Subscription;
