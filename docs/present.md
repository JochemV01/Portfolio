---
layout: page
title: "Present"
permalink: /present
---

# Final Master Project

## Project Overview and Goals
*(Note: Due to an NDA, project details and deliverables are excluded.)*

My FMP extended the card set from the Preparation FMP, exploring how generative AI can support users in creating smart home automation ideas. Conducted at Signify with a focus on Philips Hue, the goal was to design a feature that encourages creative automations supporting varied input types, validated through user feedback and potentially applicable in the Hue app.

My personal goals included learning about generative AI, following a more creative design process, understanding smart home users, gaining insight into large-company operations and business requirements, and improving my object-oriented programming (OOP) skills.

## Design Process
I used the 5-stage design thinking process *(Empathize, Define, Ideate, Prototype, Test)* in a non-linear, iterative way [2]. I value the non-linear nature of this process, because prototyping can spark new ideas, while tests can also trigger new ideas, reveal insights that redefine the problem, or help learn more about users. The process of my FMP is approximated below, while in reality at some points multiple stages happened simultaneously. My Preparation FMP is not included here, but also one full cycle through the process.

![Design Thinking Process](/assets/images/m2/design-thinking-process.avif)

1. **Empathize**: Literature review on user needs
2. **Define**: Initial brief with Signify input
3. **Ideate**: Brainstorm concepts
4. **Define**: Feedback-based brief revision
5. **Ideate**: Refine ideas
6. **Prototype**: Experiments with ChatGPT and Claude
7. **Prototype**: First LLM chatbot version
8. **Test**: Internal and Signify evaluations
9. **Empathize**: Further research into CUIs and UX
10. **Define**: Second design iteration goals
11. **Ideate**: UI sketching, paper prototyping, feedback
12. **Prototype**: CUI iteration 2
13. **Test**: User testing + Signify review
14. **Ideate**: Refinement ideas
15. **Prototype**: Small UX improvement
16. **Define**: Future improvement directions

Working at Signify was an enriching experience. Regular presentations improved my communication skills, while interactions with knowledgeable staff elevated my work. Their feedback helped me refine both my design and its presentation.

My work held value for Signify, evidenced by the custom internship position they created for me and shared interest in the project:
> “Our collaboration explores how AI can enhance lighting automation experiences… aligning with Signify’s ambition to enrich user engagement in smart lighting solutions.”
> 
> 
> ~ **Laura Taylor**, Head of Design Exploration at Signify

# Development

## Expertise Area Reflections

### Technology & Realization
As a TA for Creative Programming, I realized I lacked understanding of OOP. After self-study, I applied OOP in my FMP using Processing (Java-based), which supports interactive visuals. I now grasp OOP’s modularity and flexibility, with my final prototype comprising 7 classes. This experience gives me confidence in adapting to other programming languages.

This was also my first real use of external APIs. I learned how to handle API calls in Java and JavaScript, working with both internet-based APIs (like Data Foundry) and local APIs (like the Philips Hue API used during Demoday). This broadened my ability to develop functional, diverse prototypes.

### Creativity & Aesthetics
Generative AI offers new ways to support user and designer creativity [8]. While not inherently creative, AI can accelerate iteration and prototyping. I experienced this firsthand when building a Demoday stand webpage: AI helped me create a webpage that generates custom images from automations, stores them, displays a slideshow, and shows related colours on Philips Hue lights. With ChatGPT, it took two evenings to create, without, it would’ve taken weeks.

Working on a CUI deepened my understanding of interface evolution. As systems grow more capable, old interfaces become less intuitive, prompting shifts (e.g., to natural language interaction) [12]. This inspired my belief that designers must preserve feedforward and intuitiveness in CUIs through affordances, rich interaction, and tangibility. My UI elements began exploring this.

### User & Society
Signify’s detailed personas showed me how distinct brands serve different user types. Their customer-first approach reinforced the importance of creating real value. I also gained awareness of non-consumer users: professionals with different priorities like speed and flexibility over UX.

A key insight I received was the importance of narrowing to a specific user group to better understand and address their needs. This makes it easier to define what sets your design apart. Though I learned this late in the project, it will be invaluable in future work.

### Math, Data & Computing
To build an LLM-based chatbot, I had to understand how LLMs work: they predict the next token based on input, without understanding content. Prompting steers output, but results remain probabilistic, not reliable. This taught me that when designing with AI, it's crucial to expect and plan for failure, handling edge cases gracefully. Robust design must account for AI’s inherent unpredictability.

### Business & Entrepreneurship
Working at Signify gave me a firsthand view of how large companies operate, from organizational structure to cybersecurity (e.g., restricted file access). I also saw how feasibility factors into product development.

For instance, AI features present a trade-off: Commercial APIs are high-quality but expensive, requiring unsustainable subscription-based business models; open-source models are cheaper but still resource-heavy; on-device models are cost-effective but limited. Designers may not control these decisions, but awareness of business constraints is essential to design viable products.

### Overlap
Many lessons spanned multiple expertise areas:

- OOP and API use: *T&R* + *MD&C*
- Rapid prototyping via AI: *C&A* + *T&R*
- UI history and intuitiveness: *C&A* + *U&S*
- Personas: *U&S* + *B&E*
- Business feasibility: *B&E* + *C&A* + *T&R*

## PI&V Growth
This project shaped my professional identity and vision. The GUI-to-CUI shift highlighted the broader pattern of interface evolution, just as I foresee a future shift from screens to augmented reality.

It also reaffirmed my preference for iterative, non-linear processes like design thinking [2], which balance creativity with structure for continued refinement and justification of decisions.

# References
- [2]	Rikke Friis Dam. 2025. The 5 Stages in the Design Thinking Process. The Interaction Design Foundation. Retrieved June 17, 2025 from <https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process>
- [8]	Pegah Karimi, Jeba Rezwana, Safat Siddiqui, Mary Lou Maher, and Nasrin Dehbozorgi. 2020. Creative sketching partner: an analysis of human-AI co-creativity. Proceedings of the 25th International Conference on Intelligent User Interfaces (March 2020), 221–230. <https://doi.org/10.1145/3377325.3377522>
- [12] 2025. User interface. Wikipedia. Retrieved June 17, 2025 from <https://en.wikipedia.org/w/index.php?title=User_interface&oldid=1292076320>