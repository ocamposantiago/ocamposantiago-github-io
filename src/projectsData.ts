export type ProjectsData = {
  pName: string;
  description: string;
  photos: string;
  amount: number;
};

export const projectsData: ProjectsData[] = [
  {
    pName: "NIKE",
    description: "Nike Project",
    photos: "images/nike_",
    amount: 1,
  },
  {
    pName: "TELEFONICA",
    description: "Telefonica project",
    photos: "images/telefonica_",
    amount: 2,
  },
  {
    pName: "ENACOM",
    description: "encaom VR experience",
    photos: "images/enacom_",
    amount: 7,
  },
  {
    pName: "FORD",
    description: `Final client: FORD
     /*Collaborative work*/
objective: Create a virtual museum that tells us the history of the ford ranger,
completion period of 1 month
Personal Tasks: interaction design,
programming in unreal engine,
implementation for Meta quest 2
Software:
Blender 4.x for scenario modeling,
unreal engine 5 for VR app development`,
    photos: "images/fordvr_",
    amount: 6,
  },
  {
    pName: "PERSONAL PRJ",
    description: "Personal works",
    photos: "images/personal_",
    amount: 12,
  },
];
