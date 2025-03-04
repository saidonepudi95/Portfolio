// Import Local Images from src/assets/logos/
import wellsLogo from './assets/logos/wells.png';
import treppLogo from './assets/logos/treep.png';
import blackCatsLogo from './assets/logos/blackcats.png';

export const services = [
    {
        title: "Technology Enthusiast",
        icon: '/assets/icons/tech.png', // Store in public/assets/icons
    },
    {
        title: "Software Engineer",
        icon: '/assets/icons/software.png',
    },
    {
        title: "Photographer",
        icon: '/assets/icons/photography.png',
    },
];

export const name = 'Sai Donepudi';

export const experiences = [
    {
        company: "Wells Fargo",
        role: "MLOps Engineer",
        duration: "April 2023 - Present",
        logo: wellsLogo,  // ✅ Using Local Image from src/assets/logos/
        points: [
            "Designed and deployed scalable ML pipelines, automating model training, validation, and deployment for real-time financial analytics.",
            "Developed and optimized CI/CD workflows for ML models using AWS SageMaker, MLflow, and Kubernetes, ensuring seamless production deployment.",
            "Implemented robust data preprocessing and feature engineering workflows to improve model accuracy and performance.",
            "Enhanced model monitoring and observability with Prometheus and Grafana, enabling proactive issue detection and resolution.",
            "Integrated security best practices into MLOps pipelines, ensuring compliance with financial regulations and protecting sensitive customer data."
        ],
        url: "https://www.wellsfargo.com/"
    },
    {
        company: "Trepp, Inc.",
        role: "Data Scientist & Data Engineer",
        duration: "May 2019 - Oct 2021",
        logo: treppLogo,  // ✅ Using Local Image
        points: [
            "Developed real estate portfolio risk models leveraging **scikit-learn, TensorFlow, and Bayesian inference** to optimize investment strategies.",
            "Built **ETL workflows using AWS Glue, PySpark, and Kafka** for processing large-scale structured finance and commercial real estate datasets.",
            "Implemented **Monte Carlo simulations** for property valuation and risk analysis, improving financial forecasting accuracy.",
            "Designed and deployed **NLP models using AWS SageMaker and spaCy** to extract key insights from financial documents and loan agreements.",
            "Optimized **Redshift and Snowflake** data warehouses, improving query performance for financial data analytics and reporting.",
            "Integrated **Airflow and MLflow** into MLOps pipelines for continuous model training, monitoring, and deployment."
        ],
        url: "https://www.trepp.com/"
    },
    {
        company: "Black Cats Group",
        role: "Data Engineer & ETL Specialist",
        duration: "2013 - 2016",
        logo: blackCatsLogo,  // ✅ Using Local Image
        points: [
            "Developed and maintained **Hadoop-based ETL pipelines** to process and transform large-scale structured data across various platforms.",
            "Leveraged **Apache Hive** and **Pig** to perform data processing and analysis on petabytes of data in a distributed computing environment.",
            "Implemented **MapReduce jobs** to optimize the performance of large-scale data processing tasks in the Hadoop ecosystem.",
            "Automated and optimized the data extraction, transformation, and loading (ETL) processes for client-facing applications using **Oozie** for workflow management.",
            "Worked on **data warehousing** solutions using **Hadoop-based platforms** and contributed to setting up and managing data pipelines for various applications in the company."
        ],
        url: "https://blackcatsgroup.com/"
    },
]

// EmailJS Configurations (Using Environment Variables for Security)
export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
