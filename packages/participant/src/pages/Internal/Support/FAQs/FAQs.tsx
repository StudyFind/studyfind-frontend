import FAQPage from "components/templates/Internal/Support/FAQ/FAQPage";

function FAQ() {
  const questions = [
    {
      prompt: "What fees am I responsible for?",
      answer: "No, you won’t be responsible for fees.",
    },
    {
      prompt: "How do I join a study?",
      answer:
        "Once you’ve found a study that interests you, all you need to do is click the button that says “Enroll.” You will then answer a few quick questions, most of which have simple “yes” or “no” answers. Your privacy is important, and even though everything is anonymous, you are still allowed to decline to answer any question for any reason.",
    },
    {
      prompt: "How do I drop out of a study?",
      answer:
        "You are under no obligation to participate, but currently, you will need to message the researcher and request that they remove you. But, we are working towards including a way you may remove yourself from studies. (StudyFind promotes healthy relationships, which means anyone should be able to initiate the breakup.)",
    },
    {
      prompt: "How will I know what to do for each study?",
      answer:
        "If you click the schedule tab, you will see a calendar with all of your future meetings",
    },
    {
      prompt: "How do I check what studies accepted me?",
      answer:
        "If you click the “My Studies” section, you will see a list of all the ones you applied to. Your status is to the right of the studies barcode. If it says “Interested” the researcher hasn't had a chance to review your application yet. And just like college, if it says “Accepted,” you’re as good as in.",
    },
    {
      prompt: "How do I contact a customer service representative?",
      answer:
        "Please feel free to leave any questions or concerns in the Feedback section of the software and include your email if you'd like us to follow up with you.",
    },
    {
      prompt: "How do I log out?",
      answer:
        "On the sidebar, click the “Account” tab. Then all you need to do is click the big red button on the top right that says “sign out.”",
    },
    {
      prompt: "How do I delete my account?",
      answer:
        'We get it; it\'s you, not us. (If it was us, please let us know how we should change) But if you really have to go, all you need to do is go to the account section and click the "Security" tab. Scroll to the bottom of the page and enter your login info and then just click delete. *Warning* All of your information is confidential, and we will be unable to retrieve anything that was once on your account after it is deleted *Warning*',
    },
    {
      prompt: "What kinds of studies can I participate in?",
      answer:
        "(A) Observational - A study in which participants may receive diagnostic, therapeutic, or other types of interventions. (B) Interventional - A study in which participants may receive one or more interventions/treatments. Researchers evaluate the effects of the interventions.",
    },
    {
      prompt: "How can I learn more about StudyFinds Privacy Policy?",
      answer: "Click here to access StudyFinds Privacy Policy.",
    },
    {
      prompt: "How can I learn more about StudyFind Terms of Service?",
      answer: "Click here to access StudyFinds Terms of Service.",
    },
  ];

  return <FAQPage questions={questions} />;
}

export default FAQ;
