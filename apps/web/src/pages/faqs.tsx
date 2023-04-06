//please create react component. Come on do not create a comment. Create a component

import { Container } from '@billboards-org/ui/src/components/atoms/Container'
import { Accordion } from '@billboards-org/ui/src/components/molecules/Accordion'

const faqs = [
  {
    title: 'How do I request to place a billboard on my property?',
    content:
      'Just head on over to our website and fill out the "Request a Billboard" form. Our team of agents will take care of the rest (including verifying that your property is suitable for a billboard and that it meets all local regulations).',
  },
  {
    title: 'Can I choose where my billboard is placed?',
    content:
      "Unfortunately, no. Our team of agents and installers are the experts when it comes to selecting the best location for your billboard. But don't worry, we promise to put it in a spot that will get maximum exposure for your business.",
  },
  {
    title: 'How long does it take for a billboard to be installed?',
    content:
      "Our team of skilled installers can usually get a billboard up and running in under 24 hours. So whether you're in a rush or just really excited to see your ad on a big, shiny billboard, we've got you covered.",
  },
  {
    title: 'Can I design my own billboard ad?',
    content:
      "Of course! Just use our online ad builder to create a custom ad that's tailored to your business and target audience. Or, if you're feeling a bit creatively challenged, our team of designers is here to help.",
  },
  {
    title: 'How do I know which billboard is right for my business?',
    content:
      "No worries, our team is here to help! Just give us a call or send us an email, and we'll be happy to provide recommendations based on your business goals and target audience.",
  },
  {
    title: 'How often can I update my billboard ad?',
    content:
      "As often as you'd like! Just use our online ad builder to create a new ad, and our team of installers will update the billboard with your new ad in under 24 hours. So whether you want to update your ad daily, weekly, or monthly, we've got you covered.",
  },
  {
    title: 'Can I advertise on multiple billboards at once?',
    content:
      'Absolutely! In fact, we highly recommend it. The more billboards your ad appears on, the more exposure your business will get. So go ahead and create a campaign for multiple billboards - your business will thank you.',
  },
  {
    title:
      "I'm not sure if billboard advertising is right for my business. Can you help?",
    content:
      "Of course! Just give us a call or send us an email, and our team will be happy to provide guidance and advice. We're confident that billboard advertising can benefit any business, so don't hesitate to reach out and learn more.",
  },
]

const FAQS = () => {
  // create a component
  return (
    <Container>
      <h1 className="mt-8 text-3xl font-light text-black"> FAQS </h1>
      <div className="max-w-lg space-y-2">
        {faqs.map((faq) => (
          <div key={faq.title}>
            <div className="py-2 bg-white">
              <Accordion title={faq.title}>
                <p>{faq.content}</p>
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default FAQS
