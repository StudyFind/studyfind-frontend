import styled from "styled-components";
import { auth } from "@studyfind/firebase";
import { Link } from "components/atoms";
import { Badge, Button } from "@chakra-ui/react";
import FAQPage from "components/templates/Internal/Support/FAQ/FAQPage";

function FAQs() {
  const questions = [
    {
      prompt: "Do I need to pay to use StudyFind?",
      answer: "No, our services are free for participants.",
    },
    {
      prompt: "How do I find studies that are relevant to me?",
      answer: (
        <>
          We use various filters to show our users studies that are most relevant to them. Your{" "}
          <BoldLink to="/account/profile">Account Profile</BoldLink> page allows you to enter your
          biological sex and birthdate which helps us filter out studies you don't meet the
          requirements for. Additionally, the <BoldLink to="/find-studies">Find Studies</BoldLink>{" "}
          page has several filters you can make use of. You can search for studies using the search
          bar as well as toggle the filters listed below them.
        </>
      ),
    },
    {
      prompt: "How do I join a study?",
      answer: (
        <>
          Once you have found a study that interests you, click the blue "Enroll" button next to the
          study. You will then have to answer some simple yes/no questions to help the researcher
          determine your eligibility, after which you will have successfully joined the study. Your
          privacy is important to us, and even though everything is anonymous, you are allowed
          decline answering any of the questions if you choose to do so.
        </>
      ),
    },
    {
      prompt: "How do I drop out of a study?",
      answer: (
        <>
          You are under no obligation to participate in a study and can therefore drop out at any
          time. We recommend speaking to the researcher first before dropping out and letting them
          know your reason for doing so. To withdraw yourself from the study, go to the{" "}
          <BoldLink to="/your-studies">Your Studies</BoldLink> page and click the red button with
          the door icon in the same row as the study you wish to leave. You will then be asked to
          confirm your action, after which you will have successfully left the study, and all your
          study-specific information will be deleted thereafter.
        </>
      ),
    },
    {
      prompt: "How do I know the next steps to take after enrolling for a study?",
      answer: (
        <>
          Once you have joined the study, please wait for the researcher to send you a message or
          set up a meeting with you. You can check the software every few days for updates, but may
          also opt in for receiving email notifications for updates through the{" "}
          <BoldLink to="/account/notifications">Account Notifications</BoldLink> page.
        </>
      ),
    },
    {
      prompt: "How do I confirm a reminder or a meeting?",
      answer: (
        <>
          Once a researcher creates a reminder or meeting for you, you will be notified based on
          your notification preferences. You will then need to confirm the reminder or meeting for
          it to take effect as well as indicate to the researcher that those days and times work for
          you. You can view and confirm meetings or reminders by clicking on the meetings or
          reminders icon button in the <BoldLink to="/your-studies">Your Studies</BoldLink> page
        </>
      ),
    },
    {
      prompt: "How do I check my status for a study?",
      answer: (
        <>
          You can find your status for a study displayed in the{" "}
          <BoldLink to="/your-studies">Your Studies</BoldLink> page. Here, you will see a list of
          all studies you have applied to. Your status is to the right of the study ID. You initial
          status is set to <Badge>INTERESTED</Badge> and if it continues to show the same, it means
          the researcher is still reviewing your application. The other statuses that may be
          displayed are <Badge colorScheme="purple">INTERESTED</Badge>,{" "}
          <Badge colorScheme="teal">SCREENED</Badge>, <Badge colorScheme="green">ACCEPTED</Badge>,
          and <Badge colorScheme="red">REJECTED</Badge>
        </>
      ),
    },
    {
      prompt: "How do I contact a customer service representative?",
      answer: (
        <>
          If you have any questions, feel free to contact us at{" "}
          <BoldLink to="mailto:help@studyfind.org">help@studyfind.org</BoldLink>
        </>
      ),
    },
    {
      prompt: "How do I sign out?",
      answer: (
        <>
          When clicking the user icon on the top bar, a dropdown menu will open from which you can
          select the "Sign out" option. You can also sign out by clicking the button below: <br />
          <Button size="sm" marginTop="10px" colorScheme="red" onClick={auth.signout}>
            Sign out
          </Button>
        </>
      ),
    },
    {
      prompt: "How do I delete my account?",
      answer: (
        <>
          In order to delete your account, you will need to re-enter your email and password on the{" "}
          <BoldLink to="/account/security">Account Security</BoldLink> page. You will then be asked
          to confirm your action, after which your account along with all associated data will be
          deleted. WARNING: This is a permanent action and cannot be reversed.
          <br />
          <br />
          We get it; it's you, not us. (If it was us, please let us know how we should change by
          answering this <BoldLink to="https://google.com">short survey</BoldLink>).
        </>
      ),
    },
    {
      prompt: "What kinds of studies can I participate in?",
      answer: (
        <>
          <div>
            (A) Observational - A study in which participants may receive diagnostic, therapeutic,
            or other types of interventions
          </div>
          <div>
            (B) Interventional - A study in which participants may receive one or more
            interventions/treatments
          </div>
        </>
      ),
    },
    {
      prompt: "How can I learn more about StudyFinds Privacy Policy?",
      answer: (
        <BoldLink to="https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fprivacy-policy.pdf?alt=media&token=1f6fa4be-b10a-4286-9bb0-92a1f992ad71">
          Click here to access StudyFinds Privacy Policy.
        </BoldLink>
      ),
    },
    {
      prompt: "How can I learn more about StudyFind Terms of Service?",
      answer: (
        <BoldLink to="https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fterms-of-service.pdf?alt=media&token=fc3f4e63-3260-43f2-b838-61c562bbac9e">
          Click here to access StudyFinds Terms of Service.
        </BoldLink>
      ),
    },
  ];

  return <FAQPage questions={questions} />;
}

const BoldLink = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
  color: rgb(66, 153, 225);

  :hover {
    text-decoration: underline;
  }
`;

export default FAQs;
