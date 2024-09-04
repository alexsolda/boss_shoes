export type IMockProducts = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const mockProducts: IMockProducts[] = [
    {
        id: 1,
        name: "Green Airoo 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 2000,
        image: "/images/prod1.png"
    },
    {
        id: 2,
        name: "Green Airoo 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 3630.50,
      image: "/images/prod2.png"
    },
    {
        id: 3,
        name: "Green Airoo 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 5890.99,
      image: "/images/prod3.png"
    },
    {
        id: 4,
        name: "Green Airoo 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 1250.30,
      image: "/images/prod4.png"
    },
    {
        id: 5,
        name: "Green Airoo 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 859.30,
      image: "/images/prod5.png"
    },
    {
        id: 6,
        name: "Green Airoo 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 2569.56,
      image: "/images/prod6.png"
    },
];