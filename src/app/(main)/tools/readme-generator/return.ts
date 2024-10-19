export const generateReadme = (formData: Record<string, any>): string => {
  const {
    title,
    description,
    features,
    techstack,
    demoLink,
    image,
    roadmap,
    contributors,
    gmail,
  } = formData;

  return `
<a id="readme-top"></a>

<div align="center">
  <h1 align="center">${title?.toUpperCase() || "PROJECT TITLE"}</h1>
  <p align="center">
    ${description || "Brief project description goes here."}
    <br />
    <a href="${demoLink || '#'}"><strong>View Demo »</strong></a>
  </p>
</div>

---

## Features
${features
      ? (features as string).split('\n').map((feature: string) => `- ${feature.trim()}`).join('\n')
      : 'No features listed.'}

<br/>

## Tech Stack
${techstack
      ? (techstack as string).split(',').map((tech: string) => `- ${tech.trim()}`).join('\n')
      : 'No technologies specified.'}

<br/>

## Roadmap
${roadmap || 'No roadmap details provided.'}

<br/>

## Contributors
${contributors
      ? (contributors as string).split(',').map((person: string) => `- ${person.trim()}`).join('\n')
      : 'No contributors listed.'}

<br/>

## License
This project is licensed under the ${formData.license || "MIT"} License.

<br/>

## Contact
For support or inquiries, please contact: ${gmail || "No contact email provided."}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
  `;
};
