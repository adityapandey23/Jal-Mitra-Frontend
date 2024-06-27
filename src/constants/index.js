let NavItems = [
    {
        "id": 1,
        "label": "Home",
        "href": "Home"

    },
    {
        "id": 2,
        "label": "About",
        "href": "About"
    },
    {
        "id": 3,
        "label": "How?",
        "href": "How"
    },
    {
        "id": 4,
        "label": "Team",
        "href": "Team"
    },
    {
        "id": 5,
        "label": "Contact",
        "href": "Contact"
    },
];


let AboutUsContent = [
    {
        "id": 1,
        "Title": "Groundbreaking AI Technology",
        "Content": "At the forefront of innovation, our cutting-edge AI system is designed to revolutionize how we understand and interact with groundwater resources. With unparalleled accuracy, our technology detects the availability of wa ter beneath the ground, offering crucial insights that can transform water management practices.",
    },
    {
        "id": 2,
        "Title": "Comprehensive Water Insights",
        "Content": "Our advanced AI doesn't just tell you if water is present or absent. It dives deeper, providing essential information about the specific conditions at each location. By analyzing various factors, our system offers a comprehensive overview that is crucial for informed decision-making.",
    },
    {
        "id": 3,
        "Title": "Optimized Digging Solutions",
        "Content": "Efficiency and sustainability are at the core of our mission. Based on the insights gathered, our AI recommends the most suitable digging methods and the necessary tools required for each task. This ensures a cost-effective and environmentally friendly approach to accessing groundwater, paving the way for smarter water management practices.",
    }
]

let HowContent = [
    {
        "id": 1,
        "content": "Data collected from the NAQUIM 2.0 reports by the Government of India underwent extensive cleaning using various mathematical and statistical methods. After thorough analysis, the prediction of mineral availability rates was achieved using Artificial Neural Networks (ANN). By comparing these predicted values with reference values from the NAQUIM reports, we determined the feasible drilling range. Additionally, the type of well was predicted using multivariate regression, while the depth of the well was estimated with feedforward neural networks. To enhance user experience, we integrated the machine learning model into a functional website."
    },
    {
        "id": 2,
        "S": "Change in storage (ΔS)",
        "RRF": "Rainfall recharge (RRF)",
        "RSTR": "Recharge from stream channels (RSTR)",
        "RSWI": "Recharge from surface water irrigation (RSWI)",
        "RGWI": "Recharge from ground water irrigation (RGWI)",
        "RTP": "Recharge from tanks & ponds (RTP)",
        "RWCS": "Recharge from water conservation structures (RWCS)",
        "VF": "Vertical flow across the aquifer system (VF)",
        "LF": "Lateral flow along the aquifer system (through flow) (LF)",
        "GE": "Ground water extraction (GE)",
        "T": "Transpiration (T)",
        "E": "Evaporation (E)",
        "B": "Base flow (B)",
        "Relation": "ΔS=RRF+RSTR+RSWI+RGWI+RTP+RWCS±VF±LF−GE−T−E−B"
    }
]

export {
    NavItems,
    AboutUsContent,
    HowContent,
}