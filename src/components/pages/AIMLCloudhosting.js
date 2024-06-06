import React from 'react';
import './AIMLCloudhosting.css';

const AIMLCloudhosting = () => {
  return (
    <div className="AIML">
      <header className="AIML-header">
        <h3>Deploy GenAI and AI Apps using Streamlit and Gradio</h3>
      </header>
      <main>
        <section>
          <h2>1. Cloud Hosting Options</h2>
          
          <h3>1.1 Heroku</h3>
          <p>Heroku is a popular PaaS that makes it easy to deploy, manage, and scale applications.</p>
          <h4>Steps to deploy:</h4>
          <ol>
            <li>
              <p>Create a <code>Procfile</code>:</p>
              <pre>
                <code>
                  web: streamlit run your_app.py
                </code>
              </pre>
            </li>
            <li>
              <p>Push to Heroku:</p>
              <pre>
                <code>
                  git init<br />
                  heroku create<br />
                  git add .<br />
                  git commit -m "Initial commit"<br />
                  git push heroku master
                </code>
              </pre>
            </li>
            <li>
              <p>Open your app:</p>
              <pre>
                <code>
                  heroku open
                </code>
              </pre>
            </li>
          </ol>

          <h3>1.2 AWS Elastic Beanstalk</h3>
          <p>AWS Elastic Beanstalk is great for deploying and managing applications quickly.</p>
          <h4>Steps to deploy:</h4>
          <ol>
            <li>
              <p>Create a <code>requirements.txt</code> and <code>Procfile</code>:</p>
              <pre>
                <code>
                  # Procfile<br />
                  web: streamlit run your_app.py
                </code>
              </pre>
            </li>
            <li>
              <p>Deploy using the Elastic Beanstalk CLI:</p>
              <pre>
                <code>
                  eb init -p python-3.8 my-streamlit-app<br />
                  eb create my-streamlit-env<br />
                  eb deploy
                </code>
              </pre>
            </li>
          </ol>

          <h3>1.3 Google Cloud Platform (GCP) App Engine</h3>
          <p>GCP App Engine is a fully managed serverless platform for developing and hosting web applications at scale.</p>
          <h4>Steps to deploy:</h4>
          <ol>
            <li>
              <p>Create an <code>app.yaml</code> file:</p>
              <pre>
                <code>
                  runtime: python38<br />
                  <br />
                  entrypoint: streamlit run your_app.py<br />
                  <br />
                  handlers:<br />
                  - url: /static<br />
                    static_dir: static<br />
                  <br />
                  - url: /.*<br />
                    script: auto
                </code>
              </pre>
            </li>
            <li>
              <p>Deploy using the gcloud CLI:</p>
              <pre>
                <code>
                  gcloud app deploy<br />
                  gcloud app browse
                </code>
              </pre>
            </li>
          </ol>

          <h3>1.4 Microsoft Azure</h3>
          <p>Azure provides a range of services to host web apps, including Azure App Service.</p>
          <h4>Steps to deploy:</h4>
          <ol>
            <li>
              <p>Create a <code>requirements.txt</code> and <code>Procfile</code>:</p>
              <pre>
                <code>
                  # Procfile<br />
                  web: streamlit run your_app.py
                </code>
              </pre>
            </li>
            <li>
              <p>Deploy using Azure CLI:</p>
              <pre>
                <code>
                  az webapp up --sku F1 --name my-streamlit-app
                </code>
              </pre>
            </li>
          </ol>
        </section>

        <section>
          <h2>2. Containerized Deployment with Docker</h2>
          <ol>
            <li>
              <p>Create a <code>Dockerfile</code>:</p>
              <pre>
                <code>
                  FROM python:3.8-slim<br />
                  <br />
                  WORKDIR /app<br />
                  <br />
                  COPY requirements.txt requirements.txt<br />
                  RUN pip install -r requirements.txt<br />
                  <br />
                  COPY . .<br />
                  <br />
                  CMD ["streamlit", "run", "your_app.py"]
                </code>
              </pre>
            </li>
            <li>
              <p>Build and run the Docker container locally:</p>
              <pre>
                <code>
                  docker build -t my-streamlit-app .<br />
                  docker run -p 8501:8501 my-streamlit-app
                </code>
              </pre>
            </li>
            <li>
              <p>Deploy to a cloud service:</p>
              <p>
                - Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS), or Azure Kubernetes Service (AKS).<br />
                - Push the Docker image to a container registry like Docker Hub, Google Container Registry (GCR), or Amazon Elastic Container Registry (ECR).<br />
                - Deploy the container to a Kubernetes cluster or directly to cloud services like AWS Fargate.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2>3. Scaling and Monitoring</h2>
          <h4>3.1 Autoscaling:</h4>
          <p>Use cloud provider features to automatically scale your application based on traffic and usage patterns.</p>

          <h4>3.2 Monitoring and Logging:</h4>
          <p>Integrate logging and monitoring tools to keep track of your application's performance. Tools like AWS CloudWatch, Google Stackdriver, and Azure Monitor can be very useful.</p>
        </section>

        <section>
          <h2>Example Deployment on Heroku</h2>
          <ol>
            <li>
              <p>Create <code>requirements.txt</code>:</p>
              <pre>
                <code>
                  streamlit<br />
                  gradio
                </code>
              </pre>
            </li>
            <li>
              <p>Create <code>Procfile</code>:</p>
              <pre>
                <code>
                  web: streamlit run your_app.py
                </code>
              </pre>
            </li>
            <li>
              <p>Deploy to Heroku:</p>
              <pre>
                <code>
                  git init<br />
                  heroku create<br />
                  git add .<br />
                  git commit -m "Initial commit"<br />
                  git push heroku master<br />
                  heroku open
                </code>
              </pre>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default AIMLCloudhosting;
