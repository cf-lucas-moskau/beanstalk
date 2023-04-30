
export const experiments = [
    {
        id: '98KLh34HGFe8',
        title: 'Experiment 1',
        type: 'investment',
        description: '3-factorial (friendship ties: three strangers vs two friends and a stranger vs three friends) within-subjects design to examine the relationship between friendship ties and investment into different ETs (i.e., crowdfunding success) using a student population. Participants get access to a software that simulates a crowdfunding platform on which they read pitches (i.e., self-descriptions) of six ETs (two in each condition). Participants can invest any amount of their participation money into the hypothetical ETs. Based on a simulation, participants receive a random return or loss for their investment into the different start-ups to heighten ecological validity. The money they gain or do not invest will be paid as participation fees. ',
        pitches: [
            "F0MI",
            "F0MA", 
            "F0FE",
            "F2MI", 
            "F2MA", 
            "F2FE",
            "F3MI",
            "F3MA",
            "F3FE"
        ]
    },
    {
        id: '98KLh34HGFe9',
        title: 'Experiment 2',
        type: 'SIT in prolific',
        description: '3(friendship ties: three strangers vs two friends and a stranger vs three friends) × 2(funding team identification: low vs high) within-subjects design in a more diverse population sampled via prolific academic. We manipulate ET identification in the team descriptions (i.e., referring to the founding team as “we” and “us” instead of “the founders” and “they”). Here, we ask participants to write a review of the companies listed and to hypothetically allocate a fixed amount of money to the six start-ups.  ',
        pitches: [
            "S2F0LS",
            "S2F2LS", 
            "S2F3LS",
            "S2F0HS",
            "S2F2HS", 
            "S2F3HS",
        ]
    },
    {
        id: '98KLh34HGFe10',
        title: 'Experiment 3',
        type: 'SIT in business angels',
        description: 'Experiment 3 directly replicates Study 5 in a population of business angels and venture capital investors. In this study, investment in the ET will be operationalised by writing an evaluation of each start-up and by giving an investment recommendation. ',
        pitches: [
            "S2F0LS",
            "S2F2LS", 
            "S2F3LS",
            "S2F0HS",
            "S2F2HS", 
            "S2F3HS",
        ]
    },
]

export const pitches = [
    //Strangers Study 1
    {
        id: 'F0MI',
        name: 'Bean Voyage',
        productDescription: 'Bean Voyage is a coffee start-up that sources premium coffee beans from women-led farms in Latin America and East Africa. Their roasting process is carefully monitored to ensure a consistent, medium roast with a smooth, velvety finish.',
        teamDescription: 'The founders of Bean Voyage are coffee lovers David, Emily, and Lucy, who met this spring through a coffee industry forum. David, a coffee roaster and barista, has years of experience in special roasts. Emily, the creative genius, is the person behind the company’s branding and marketing. And Lucy, a seasoned business strategist with a deep understanding of the coffee industry, stirs Bean Voyages operations.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    {
        id: 'F0FE',
        name: 'Origin Roasters',
        productDescription: 'Origin Roasters is a coffee start-up that specializes in single-origin, light roasts. They source their beans directly from smallholder farmers in Ethiopia, Honduras, and Indonesia to ensure the highest quality and flavour.',
        teamDescription: 'Kayla, Victoria, and Rachel, the founders of Origin Roasters, met this April through a coffee trade fair. Kayla, a strategic expert, has a knack for identifying growth opportunities in the competitive coffee market. Victoria, a coffee roaster and barista, shines with her long-term experience in roasting. And Rachel, the driving force behind the company, is in charge of their creative and effective branding and marketing campaigns.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    {
        id: 'F0MA',
        name: 'Roast Masters',
        productDescription: 'Roast Masters is a coffee start-up that offers a unique blend of Brazilian and Colombian coffee beans, carefully roasted to perfection. Their medium roast has a rich, chocolatey flavour with a hint of citrus.',
        teamDescription: 'The founders Ryan, Jacob, and Nick met this year at a coffee-tasting event. Ryan, the driving force behind Roast Master’s strategic excellence, heads all things operational. Jacob, a branding and marketing guru, develops and executes the company’s messaging and campaigns. And Nick, a first-class barista, made his hobby his profession and roasts incredible coffee blends.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    //Two friends Study 1
    {
        id: 'F2FE',
        name: 'Terra Roasters',
        productDescription: 'Terra Roasters is a coffee start-up that specializes in organic, shade-grown coffee from Central and South America. Their dark roast has a bold, smoky flavour with notes of caramel and chocolate.',
        teamDescription: 'The founders are friends Meghan and Jessica and their business partner and strategist Hannah. Meghan, a skilled barista and roaster, creates unique blends that awaken the senses. Jessica, a marketing whiz, crafts the brand’s messaging and campaigns with precision. And, Hannah a seasoned business strategist, leads operations with a sharp eye for growth opportunities.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    {
        id: 'F2MA',
        name: 'Black Magic Roasters',
        productDescription: 'Black Magic Roasters specializes in creating bold and rich coffee blends. They source their beans from small farms in Ethiopia and use a unique roasting process to create their signature dark roast.',
        teamDescription: 'The founders are friends Mike and Joshua, who teamed up with Daniel for their start-up journey. Mike, the operational leader, ensures smooth logistics and financial management. Joshua, the resident barista and roaster, is meticulous in crafting the perfect roast profile. Daniel, the creative force, conceptualizes and executes branding and marketing strategies that tell the story of the beans.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    {
        id: 'F2MI',
        name: 'Mountain Roast Coffee ',
        productDescription: 'Mountain Roast Coffee creates coffee blends using beans sourced from high-altitude farms in South America. Their unique roasting process brings out the natural sweetness and complexity of the beans',
        teamDescription: 'The founders are coffee-loving friends Samantha and Chris, who found roasting legend Alex to join their venture. Samantha, the creative visionary, crafts marketing campaigns that capture the essence of the company. Chris, the business strategist, keeps a watchful eye on operations, seeking out new opportunities for growth. Alex, the barista and roaster, is always experimenting with new techniques to bring out unique flavours.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    //All Friends Study 1
    {
        id: 'F3MI',
        name: 'Golden Bean Coffee',
        productDescription: 'Golden Bean Coffee specializes in light roast coffee blends using beans from around the world. They focus on highlighting the unique flavours and characteristics of each bean.',
        teamDescription: 'The founders are friends Jack, Sarah, and Matt. Jack, the barista and coffee roaster, uses his skills to create blends that are both unique and delicious. Sarah, the creative force, develops branding and marketing strategies that showcase Golden Bean’s dedication to the craft. And Matt, the operational leader, ensures that everything runs smoothly behind the scenes.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    {
        id: 'F3FE',
        name: 'Red River Roasters',
        productDescription: 'Red River Roasters specializes in medium roast coffee blends using beans sourced from farms in Central and South America. They use a traditional roasting process to create balanced and smooth blends.',
        teamDescription: 'The founders are friends Ashley, Beth, and Lauren. Ashley, the creative mind, devises branding and marketing campaigns that build Red River Roaster’s reputation for coffee lovers. Beth, the barista and coffee roaster, creates unique blends that are a hit with customers. And Lauren, the business strategist, keeps operations humming with her expertise in finance and logistics.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    {
        id: 'F3MA',
        name: 'Oasis Coffee Co.',
        productDescription: 'Oasis Coffee Co. creates coffee blends using beans sourced from small farms in Africa. They use a unique roasting process to create their signature light roast with a fruity and floral flavour profile.',
        teamDescription: 'The founders are friends Joseph, Tyler, and William. Joseph, the operational mastermind, oversees logistics and finances with a keen eye for detail. Tyler, the marketing maven, designs campaigns that resonate with customers and make a lasting impression. And William, the resident barista and coffee roaster, sources only the finest beans and roasts them to perfection.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    //Stragers Study2+3
    //Low Soical Identity 
    {
        id: 'S2F0LS',
        name: 'Bean Voyage',
        productDescription: 'Bean Voyage is a coffee start-up that sources premium coffee beans from women-led farms in Latin America and East Africa. Their roasting process is carefully monitored to ensure a consistent, medium roast with a smooth, velvety finish.',
        teamDescription: 'We are Kayla, Victoria, and Justin, a team of coffee enthusiasts that met this April through a coffee trade fair and soon founded Origin Roasters. Kayla, our strategic expert, has a knack for identifying growth opportunities for us in the competitive coffee market. Victoria, our talented coffee roaster and barista, brings her extensive experience to each of our roast roasts. And Justin, the driving force behind our company, is in charge of our creative and effective branding. He is creating great campaigns that represent us and how we live our craft.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    //High Social Identity 
    {
        id: 'S2F0HS',
        name: 'Origin Roasters',
        productDescription: 'Welcome to Origin Roasters, where we specialize in crafting single-origin, light roasts that are sourced directly from smallholder farmers in Ethiopia, Honduras, and Indonesia. Our commitment flavour is unwavering, and we are dedicated to bringing you the best specialty coffee.',
        teamDescription: 'The founders of Bean Voyage are coffee lovers David, Emily, and Lucy, who met this spring through a coffee industry forum. David, a coffee roaster and barista, has years of experience in special roasts. Emily, the creative genius, is the person behind the company’s branding and marketing. And Lucy, a seasoned business strategist with a deep understanding of the coffee industry, stirs Bean Voyages operations.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },

    //Two Friends Study 2+3
    //Low Social identity 
    {
        id: 'S2F2LS',
        name: 'Terra Roasters',
        productDescription: 'Terra Roasters is a coffee start-up that specializes in organic, shade-grown coffee from Central and South America. Their dark roast has a bold, smoky flavour with notes of caramel and chocolate.',
        teamDescription: 'The founders are friends Meghan and Will and their business partner and strategist Hannah. Meghan, a skilled barista and roaster, creates unique blends that awaken the senses. Will, a marketing whiz, crafts the brand’s messaging and campaigns with precision. And, Hannah a seasoned business strategist, leads operations with a sharp eye for growth opportunities.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    //High Social Identity
    {
        id: 'S2F2HS',
        name: 'Black Magic Roasters',
        productDescription: 'Introducing Black Magic Roasters, where we specialize in creating coffee blends that are bold and rich in flavor. We source beans from small farms in Ethiopia and undergo a unique roasting process to produce our signature dark roast that will leave you wanting more.',
        teamDescription: 'We are coffee-loving friends, Mike and Josh, who wanted to make this love our profession and teamed up with marketing expert Rachel to found Black Magic Roasters. Mike, our operational leader, keeps a keen eye on us and ensures smooth logistics and finances. Josh is our resident barista and roaster. Thanks to him, we create the perfect roast profile that brings out the best in our beans. Our newest addition Rachel is the creative force and conceptualizes and executes branding and marketing strategies that tell the story of us and our blends.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    //All Friends Study 2+3
    //Low Social Identity 
    {
        id: 'S2F3LS',
        name: 'Golden Bean Coffee',
        productDescription: 'Golden Bean Coffee specializes in light roast coffee blends using beans from around the world. They focus on highlighting the unique flavours and characteristics of each bean.',
        teamDescription: 'The founders are friends Jack, Sarah, and Matt. Jack, the barista and coffee roaster, uses his skills to create blends that are both unique and delicious. Sarah, the creative force, develops branding and marketing strategies that showcase Golden Bean’s dedication to the craft. And Matt, the operational leader, ensures that everything runs smoothly behind the scenes.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },
    //High Social Identity
    {
        id: 'S2F3HS',
        name: 'Red River Roasters',
        productDescription: 'Welcome to Red River Roasters! We specialize in medium roast coffee blends sourced from the finest farms in Central and South America. We are using a traditional roasting process brings out the balanced and smooth flavors in each of our carefully crafted cups.',
        teamDescription: 'We are three friends, Ashley, Beth, and James, whose love of coffee drove us to found Red River Roasters. As the creative mind behind our brand, Ashley leads the charge on developing our branding and marketing campaigns that connect with coffee lovers everywhere. Beth, our resident barista and coffee roaster, puts her passion for unique blends into each of our delicious creations. And James, our business strategist, keeps us on track with his expertise in finance and logistics, ensuring we can continue to deliver the best coffee experience to our customers.',
        image: "https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/roast_logo.png?raw=true",
    },

    
]