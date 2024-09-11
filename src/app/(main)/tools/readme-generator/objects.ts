 // Define the type for individual form fields
interface FormField {
  id: string;
  name: any;
  label: string;
  placeholder?: string; // Optional because it might not be present in every case
}

 export const formFields:FormField[]  =  [
    {
      id: 'idea',
      name: 'idea',
      label: "What's your Idea",
      placeholder: 'Describe your idea here',
    },
    {
      id: 'description',
      name: 'description',
      label: 'Description',
      placeholder: 'Provide a detailed description',
    },
    {
      id: 'keywords',
      name: 'keywords',
      label: 'Keywords (use commas to separate keywords)',
      placeholder: 'Enter keywords',
    },
    {
      id: 'valueProposition',
      name: 'valueProposition',
      label: 'Unique Value Proposition?',
      placeholder: 'Describe your unique value proposition',
    },
    {
      id: 'technologies',
      name: 'technologies',
      label: 'Technologies (use commas to separate keywords)',
      placeholder: 'List the technologies used',
    },
    {
      id: 'betterProject',
      name: 'betterProject',
      label: "Why do you think you'll make this project better?",
      placeholder: 'Explain why you\'ll improve this project',
    },
    {
      id: 'eta',
      name: 'eta',
      label: "ETA's Estimated Time of Accomplishment?",
      placeholder: 'Enter the estimated time of accomplishment',
    },
    {
      id: 'purpose',
      name: 'purpose',
      label: 'Define the Purpose of your Project?',
      placeholder: 'Define your project\'s purpose',
    },
    {
      id: 'problemStatement',
      name: 'problemStatement',
      label: 'Problem Statement?',
      placeholder: 'State the problem your project addresses',
    },
    {
      id: 'projectAims',
      name: 'projectAims',
      label: 'What does your project aim to solve?',
      placeholder: 'Describe the aims of your project',
    },
    {
      id: 'uniqueAdvantage',
      name: 'uniqueAdvantage',
      label: 'List the potential features your project may include?',
      placeholder: 'List the potential features',
    },
    {
      id: 'measurableGoals',
      name: 'measurableGoals',
      label: 'Break down your project\'s objective into specific, measurable goals',
      placeholder: 'Define specific, measurable goals',
    },
  ];
  