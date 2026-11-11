const customerimages = import.meta.glob<string>(
    "../../assets/images/customers/*.avif",
    { eager: true, import: "default" }
);

const getPath = (filename: string) => {
    return customerimages[`../../assets/images/customers/${filename}`];
};

interface customerType {
    name: string,
    content: string,
    job: string,
    image: string,
}

export const customer: customerType[] = [
    {
        name: "Rajesh",
        content: "The atmosphere is unmatched. I get my best work done here with a latte in hand. The new design is stunning.",
        job: "FREELANCE DESIGNER",
        image: getPath("customer (1).avif"),
    },
    {
        name: "Shubham",
        content: "Best espresso in the city. You can taste the quality of the beans in every sip. Highly recommended!",
        job: "Coffee Enthusiast",
        image: getPath("customer (2).avif"),
    },
    {
        name: "Likhi",
        content: "A hidden gem! The staff is friendly and the pastries are to die for. Love the new booking system.",
        job: "Marketing Manager",
        image: getPath("customer (3).avif"),
    },
    {
        name: "Ajay",
        content: "Fast wifi, great coffee, and the most relaxing vibe in town. My go-to spot for remote work.",
        job: "Software Engineer",
        image: getPath("customer (4).avif"),
    },
    {
        name: "Lisa",
        content: "The aesthetics are just perfect for my feed. And the coffee tastes as good as it looks!",
        job: "Food Blogger",
        image: getPath("customer (5).avif"),
    },
];