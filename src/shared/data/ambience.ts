const ambienceimages = import.meta.glob<string>(
    "../../assets/images/ambience/*.avif",
    { eager: true, import: "default" }
);

const getPath = (filename: string) => {
    return ambienceimages[`../../assets/images/ambience/${filename}`];
};

interface ambienceType {
    src: string
}

export const ambience: ambienceType[] = [
    {
        src: getPath("ambience (1).avif"),
    },
    {
        src: getPath("ambience (2).avif"),
    },
    {
        src: getPath("ambience (3).avif"),
    },
    {
        src: getPath("ambience (4).avif"),
    },
    {
        src: getPath("ambience (5).avif"),
    },
    {
        src: getPath("ambience (6).avif"),
    },
];