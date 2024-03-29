interface Service {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
}

const servicesPage: Service[] = [
    {
        title: "Access Control System",
        description: "Popular for tracking employee attendance or traffic and ideal for providing added levels of security for sensitive documents, these systems can offer state-of-the-art technology with easy-to-use features.",
        image: "/services/Access-control-system.jpg"
    },
    {
        title: "Aluminum Storefronts",
        description: "Designed and used for schools, retail stores, offices and any commercial buildings, these doors are professionally installed to guarantee top quality safety and security to your storefront or building.",
        image: "/services/Aluminum-Storefronts.jpg"
    },
    {
        title: "Automatic Doors",
        description: "Make a good first impression to visitors of your business with automatic doors. Enjoy the convenience and ease of these doors, while also enjoying the benefits they offer.",
        image: "/services/Automatic-door-operators.jpg"
    },
    {
        title: "Commercial Door Repair",
        description: "When damage occurs, our professional team will be out as soon as possible to assess the damage and offer you the best solutions in order to rectify the problem with little disruption to your operation.",
        image: "/services/Commercial Door Repair.jpg"
    },
    {
        title: "Garage Doors",
        description: "Many clients prefer the look of wood doors, making this a popular option without having to compromise on quality , durability or fire rating.",
        image: "/services/garage-doors.jpg"
    },
    {
        title: "Locksmith Services",
        description: "We have been proudly serving the GTA for over 20 years, and over time, we have become known for our fast, reliable and effective locksmith services.",
        image: "/services/Locksmith-Service.jpg"
    },
    {
        title: "Metal FireRated Doors",
        description: "Fire-rated doors play a major role in reducing damage caused by fire. These doors provide maximum safety to a property when fires occur. Not all fire-rated doors are created equal.",
        image: "/services/Metal FireRated Doors.jpg"
    },
    {
        title: "Front Entry Doors",
        description: "Front Entry Doors description.",
        image: "/services/Front Entry Doors.jpg"
    },
    {
        title: "Emergency Lockout",
        description: "Emergency Lockout description",
        image: "/services/Emergency Lockout.jpg"
    },
]

export default servicesPage
