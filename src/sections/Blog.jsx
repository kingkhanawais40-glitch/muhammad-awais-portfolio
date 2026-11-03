
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import "../styles/blog.css";

const articles = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "Understanding Machine Learning: From Data to Predictions",
    excerpt:
      "Explore how machine learning transforms raw data into useful predictions and intelligent applications.",
    date: "October 2026",
    readTime: "6 min read",
    author: "Muhammad Awais",
    tags: ["Python", "Machine Learning", "Data Science"],
    introduction:
      "Machine learning is a branch of artificial intelligence that enables computers to learn patterns from data and use those patterns to make predictions or decisions. Instead of writing a separate rule for every situation, developers train models using examples.",
    sections: [
      {
        heading: "1. What Is Machine Learning?",
        paragraphs: [
          "Traditional software generally follows explicitly programmed rules. Machine learning takes a different approach: a model learns relationships from training data and applies those relationships to previously unseen examples.",
          "For example, a model trained on historical electricity consumption can learn how usage relates to weather, location, household characteristics, and previous consumption. It can then estimate future demand.",
        ],
      },
      {
        heading: "2. The Three Main Types",
        paragraphs: [
          "Supervised learning uses labelled examples. Classification predicts categories, such as whether an image contains a particular object, while regression predicts numerical values, such as energy consumption.",
          "Unsupervised learning explores data without predefined target labels. Clustering can group similar customers, while dimensionality reduction can help simplify complex datasets.",
          "Reinforcement learning trains an agent to select actions using rewards and feedback from its environment. It is useful for certain robotics, simulation, and decision-making problems.",
        ],
      },
      {
        heading: "3. A Practical Machine Learning Workflow",
        paragraphs: [
          "A reliable project starts by defining the problem and selecting relevant data. The next steps include cleaning missing or inconsistent values, exploring patterns, selecting features, and splitting data into training, validation, and test sets.",
          "After training, evaluate the model with metrics appropriate to the problem. Accuracy alone may be misleading for imbalanced classification datasets, so precision, recall, F1-score, and a confusion matrix can also be important.",
        ],
      },
      {
        heading: "4. Why Evaluation Matters",
        paragraphs: [
          "A model can perform well on training data but poorly on unseen examples. This is called overfitting. Validation data helps compare approaches, while a separate test set provides a more independent estimate of performance.",
          "Real-world performance also depends on data quality, changing patterns, deployment conditions, and ongoing monitoring. A useful model is not simply one with a high score; it must work reliably for its intended purpose.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Machine learning combines data, algorithms, experimentation, and evaluation. Beginners can build a strong foundation by learning Python, practising data analysis, training simple models, and gradually progressing to more advanced projects.",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Computer Vision",
    title: "Computer Vision: Teaching Machines to Understand Images",
    excerpt:
      "Learn how computers process visual information and how object detection and image classification work.",
    date: "October 2026",
    readTime: "7 min read",
    author: "Muhammad Awais",
    tags: ["Python", "OpenCV", "Deep Learning"],
    introduction:
      "Computer vision is an area of artificial intelligence focused on helping computers extract meaningful information from images and videos. It supports applications such as quality inspection, traffic analysis, medical image research, and sports analytics.",
    sections: [
      {
        heading: "1. How Computers Represent Images",
        paragraphs: [
          "A digital image is represented as a grid of pixels. Each pixel contains numerical information about brightness and colour. A colour image commonly uses three channels: red, green, and blue.",
          "Computer vision systems transform this numerical input into useful representations. Depending on the task, they may identify edges, learn visual features, classify an image, or locate objects within a scene.",
        ],
      },
      {
        heading: "2. Image Classification and Object Detection",
        paragraphs: [
          "Image classification assigns a label to an image or image crop. For example, a classifier might identify an image as containing a cat, a dog, or a bird.",
          "Object detection goes further by predicting both the category and the location of individual objects, usually using bounding boxes. This makes detection useful when several objects appear in a single image.",
          "A detection model such as YOLO is designed to predict objects efficiently. Its practical performance depends on the model version, input resolution, dataset, hardware, and deployment requirements.",
        ],
      },
      {
        heading: "3. Building a Computer Vision Project",
        paragraphs: [
          "Begin with a clearly defined problem and a representative dataset. Labels should be consistent, and the dataset should include meaningful variation in lighting, backgrounds, angles, and object appearance.",
          "Next, divide the data into training, validation, and test sets. Train a suitable model, examine its errors, and evaluate it using task-specific metrics such as precision, recall, mean average precision, or classification F1-score.",
          "For a Python-based workflow, OpenCV can help with image loading and preprocessing, while deep learning frameworks can handle model training and inference.",
        ],
      },
      {
        heading: "4. Common Challenges",
        paragraphs: [
          "A model may struggle with objects that are small, partly hidden, poorly lit, or different from its training examples. An unbalanced dataset can also cause it to favour common classes.",
          "Improvement often requires better labels, more representative training examples, appropriate augmentation, careful threshold selection, and systematic error analysis rather than simply increasing model complexity.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Computer vision projects become more effective when data quality, model selection, evaluation, and real-world constraints are considered together. Start with a small, measurable task and build towards more complex visual applications.",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Data Analytics",
    title: "Building a Reliable AI-Powered Data Analysis Workflow",
    excerpt:
      "Discover how data validation, anomaly detection, business questions, and reporting work together in analytics.",
    date: "October 2026",
    readTime: "6 min read",
    author: "Muhammad Awais",
    tags: ["Python", "Pandas", "FastAPI", "Analytics"],
    introduction:
      "Data analysis is most useful when it turns raw information into evidence that people can use to make decisions. AI-powered analytics can help automate repetitive tasks, identify unusual records, and explain patterns, but the reliability of the results still depends on the quality of the underlying workflow.",
    sections: [
      {
        heading: "1. Start with Data Understanding",
        paragraphs: [
          "Before analysing a dataset, inspect its dimensions, column names, data types, missing values, duplicate records, and basic statistical summaries. Understanding what each field represents is essential before interpreting its values.",
          "For tabular data in Python, Pandas provides tools for loading files, cleaning values, grouping records, and calculating summary statistics. The analysis should preserve the original data or provide a clear way to reproduce transformations.",
        ],
      },
      {
        heading: "2. Measure Data Quality",
        paragraphs: [
          "Data quality is not a single number. Useful checks include completeness, consistency, validity, uniqueness, and whether values fall within expected ranges.",
          "Missing values should be reported accurately, and the system should distinguish between a genuinely absent value and a value that is not applicable. Duplicate detection should also reflect the dataset's actual rules rather than assuming every repeated field is an error.",
        ],
      },
      {
        heading: "3. Detect and Investigate Anomalies",
        paragraphs: [
          "An anomaly is an observation that differs substantially from an expected pattern. Statistical methods, range checks, and machine learning can all help flag unusual records.",
          "An unusual value is not automatically incorrect. A high electricity reading, for example, might represent a data-entry error or a legitimate period of unusually high consumption. Flagged records should be investigated using domain knowledge before being removed or corrected.",
        ],
      },
      {
        heading: "4. Translate Analysis into Business Answers",
        paragraphs: [
          "People often want answers to direct questions: which city has the highest average consumption, which category has the lowest value, or how does usage change over time?",
          "A reliable analytics system translates a question into a well-defined calculation, executes it against the correct dataset, and presents the result with its units, relevant context, and limitations. Charts can make comparisons easier to understand, but they should accurately represent the underlying results.",
        ],
      },
      {
        heading: "5. Automate Responsibly",
        paragraphs: [
          "A backend API can coordinate data validation, analysis, anomaly detection, and report generation. A frontend can let users upload datasets, select questions, inspect results, and download reports.",
          "Automated systems should handle errors clearly, protect uploaded data, validate file inputs, and keep appropriate records of analysis runs. Tests should cover individual functions as well as complete workflows using realistic datasets.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Effective AI-powered analytics combines reliable data processing, meaningful evaluation, clear explanations, and careful automation. The goal is not simply to generate more charts or insights, but to help users make better-informed decisions.",
        ],
      },
    ],
  },
];

function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openArticle = (article) => {
    setSelectedArticle(article);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#blog`
    );
    document.getElementById("blog")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.getElementById("blog")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-heading">
          <span className="section-tag">Knowledge & Insights</span>

          <h2>
            My <span className="gradient-text">Blog</span>
          </h2>

          <p>
            Practical insights, lessons, and ideas from my journey in software
            engineering, artificial intelligence, and data analytics.
          </p>
        </div>

        {!selectedArticle ? (
          <>
            <div className="blog-toolbar">
              <span className="blog-result-count">
                <FaBookOpen />
                {articles.length} Articles
              </span>

              <span className="blog-toolbar-label">
                SOFTWARE ENGINEERING / AI / DATA
              </span>
            </div>

            <div className="blog-grid">
              {articles.map((article, index) => (
                <article className="blog-card" key={article.id}>
                  <div className="blog-card-top">
                    <span className="blog-card-number">
                      ARTICLE / {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="blog-category">{article.category}</span>
                  </div>

                  <h3>{article.title}</h3>

                  <p className="blog-excerpt">{article.excerpt}</p>

                  <div className="blog-card-tags">
                    {article.tags.map((tag) => (
                      <span className="blog-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="blog-card-footer">
                    <div className="blog-meta">
                      <span>
                        <FaCalendarAlt />
                        {article.date}
                      </span>
                      <span>
                        <FaClock />
                        {article.readTime}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="blog-read-btn"
                      onClick={() => openArticle(article)}
                      aria-label={`Read article: ${article.title}`}
                    >
                      Read Article <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <article className="blog-article-view">
            <button
              type="button"
              className="blog-back-btn"
              onClick={closeArticle}
            >
              <FaArrowLeft /> Back to Articles
            </button>

            <header className="blog-article-header">
              <span className="blog-category">
                {selectedArticle.category}
              </span>

              <h1>{selectedArticle.title}</h1>

              <p className="blog-article-excerpt">
                {selectedArticle.excerpt}
              </p>

              <div className="blog-article-meta">
                <span>By {selectedArticle.author}</span>
                <span>
                  <FaCalendarAlt /> {selectedArticle.date}
                </span>
                <span>
                  <FaClock /> {selectedArticle.readTime}
                </span>
              </div>

              <div className="blog-article-tags">
                {selectedArticle.tags.map((tag) => (
                  <span className="blog-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="blog-article-body">
              <p className="blog-article-intro">
                {selectedArticle.introduction}
              </p>

              {selectedArticle.sections.map((section, index) => (
                <section
                  className="blog-content-section"
                  key={`${selectedArticle.id}-${index}`}
                >
                  <h2>{section.heading}</h2>

                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <div className="blog-article-end">
                <span>END OF ARTICLE</span>
                <span className="blog-article-end-line" />
              </div>
            </div>

            <button
              type="button"
              className="blog-back-btn blog-back-bottom"
              onClick={closeArticle}
            >
              <FaArrowLeft /> Back to All Articles
            </button>
          </article>
        )}
      </div>
    </section>
  );
}

export default Blog;
