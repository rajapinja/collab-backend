import React from 'react';
import './CondaDocumentation.css';
import RAGEMBEDDINGSBEDROCK from './RAGEMBEDDINGSBEDROCK';
import Ollama from './OllamaInstall';

const CondaDocumentation = () => {
  return (
    <div className="conda-docs">
      <h1>Conda Documentation</h1>

      <section>
        <h2>Overview</h2>
        <p>
          Conda is an open-source package management and environment management system 
          that can run on Windows, macOS, and Linux. It was created for Python programs, 
          but it can package and distribute software for any language. Conda is particularly 
          popular in the data science and scientific computing communities due to its ability 
          to manage complex dependencies and create isolated environments.
        </p>
      </section>

      <section>
        <h2>Key Features of Conda</h2>
        <ul>
          <li><strong>Package Management</strong>: Conda can install, update, and remove packages and their dependencies.</li>
          <li><strong>Binary Package Distribution</strong>: Conda installs precompiled binaries, which means no need to compile code on your system.</li>
          <li><strong>Cross-platform</strong>: Works across multiple platforms, including Windows, macOS, and Linux.</li>
          <li><strong>Environment Management</strong>: Isolated environments to avoid conflicts between package versions and dependencies.</li>
          <li><strong>Reproducibility</strong>: Share your environment configurations with others.</li>
          <li><strong>Language Agnostic</strong>: Supports multiple languages, including Python, R, Ruby, Lua, and more.</li>
          <li><strong>Integration with Other Tools</strong>: Core part of Anaconda and available as Miniconda for a smaller distribution.</li>
        </ul>
      </section>

      <section>
        <h2>How to Use Conda</h2>
        <h3>Installation</h3>
        <p>You can install Conda by downloading and installing Anaconda or Miniconda from their respective websites:</p>
        <ul>
          <li><a href="https://www.anaconda.com/products/distribution" target="_blank" rel="noopener noreferrer">Anaconda</a></li>
          <li><a href="https://docs.conda.io/en/latest/miniconda.html" target="_blank" rel="noopener noreferrer">Miniconda</a></li>
        </ul>

        <h3>Basic Commands</h3>
        <div className="command-window">
          <code>conda create --name myenv python=3.8</code>
        </div>
        <div className="command-window">
          <code>conda activate myenv</code>
        </div>
        <div className="command-window">
          <code>conda deactivate</code>
        </div>
        <div className="command-window">
          <code>conda install numpy</code>
        </div>
        <div className="command-window">
          <code>conda update numpy</code>
        </div>
        <div className="command-window">
          <code>conda remove numpy</code>
        </div>
        <div className="command-window">
          <code>conda env list</code>
        </div>
        <div className="command-window">
          <code>conda env remove --name myenv</code>
        </div>
      </section>

      <section>
        <h2>Example Usage</h2>
        <div className="command-window">
          <pre>
            <code>
                {`# Create a new environment named "data_science" with Python 3.8
                conda create --name data_science python=3.8

                # Activate the new environment
                conda activate data_science

                # Install packages
                conda install numpy pandas matplotlib

                # List installed packages
                conda list

                # Deactivate the environment
                conda deactivate

                # Remove the environment
                conda env remove --name data_science`}
            </code>
          </pre>
        </div>
      </section>
      <section>
      <h2>Step-by-Step Guide to Resolve the Path Issue</h2>
      <p>Locate Your Anaconda Installation Directory:</p>
      <ul>
        <li>By default, Anaconda is installed in your user directory. However, the exact location might vary based on your installation preferences.</li>
        <li>The common paths are:
          <ul>
            <li>C:\Users\YourUsername\Anaconda3\shell\condabin\conda-hook.ps1</li>
            <li>C:\Users\YourUsername\Miniconda3\shell\condabin\conda-hook.ps1</li>
          </ul>
        </li>
      </ul>
      <p>Verify the Path:</p>
      <ul>
        <li>Open File Explorer and navigate to the condabin directory inside your Anaconda installation.</li>
        <li>Ensure that conda-hook.ps1 exists in that directory.</li>
      </ul>
      <p>Update the Profile Script:</p>
      <ul>
        <li>Once you have verified the correct path, update your profile.ps1 with the accurate path.</li>
        <li>Open PowerShell as an administrator.</li>
        <li>Open the profile script in Notepad: <code>notepad $profile</code></li>
        <li>Update the path to conda-hook.ps1:
          <pre>
            <code>
              # Conda Initialization<br />
              & "C:\Users\YourUsername\Anaconda3\shell\condabin\conda-hook.ps1"<br />
              conda activate base
            </code>
          </pre>
        </li>
        <li>Ensure you replace <code>C:\Users\YourUsername\Anaconda3</code> with the correct path if it's different.</li>
        <li>Save and Close Notepad.</li>
      </ul>
      <p>Verify and Reload the Profile Script:</p>
      <ul>
        <li>Reload the profile script in your current PowerShell session to ensure the changes take effect: <code>. $profile</code></li>
        <li>Open a New PowerShell Window to verify that Conda initializes correctly without errors.</li>
        <li>Test in VS Code by opening it and opening a new integrated terminal to ensure Conda initializes properly there as well.</li>
      </ul>
      <p>Additional Troubleshooting:</p>
      <ul>
        <li>Ensure Correct Path: Double-check the path to conda-hook.ps1.</li>
        <li>Anaconda Installation: Verify that Anaconda is properly installed and that you can manually activate the Conda environment from PowerShell.</li>
      </ul>
      <h2>Step 1: Obtain Your AWS Access Key and Secret Key</h2>
      <ol>
        <li>Log in to the AWS Management Console.</li>
        <li>Navigate to the IAM (Identity and Access Management) service.</li>
        <li>Create a new IAM user or select an existing user.</li>
        <li>Assign necessary permissions to the user (usually AmazonS3FullAccess or similar depending on your use case).</li>
        <li>Go to the "Security credentials" tab.</li>
        <li>Create access keys. This will provide you with an Access Key ID and a Secret Access Key.</li>
      </ol>
      <h2>How to Set AWS Environment Variables in PowerShell</h2>
      <p>If your PowerShell script to set environment variables was blocked due to execution policy, you can bypass the policy temporarily by running PowerShell with the <code>-ExecutionPolicy Bypass</code> flag.</p>
      <p>Or, you can set the environment variables directly in your PowerShell session:</p>
      <pre>
        <code>
          $env:AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"<br />
          $env:AWS_SECRET_ACCESS_KEY="YOUR_SECRET_KEY"
        </code>
      </pre>
      <p>After setting the correct environment variables and ensuring your AWS credentials are properly configured, try running your script again.</p>
      <h2>Step 3: Verify the Environment Variables</h2>
      <p>To make sure the variables are set correctly, you can print them out:</p>
      <pre>
        <code>
          echo $env:AWS_ACCESS_KEY_ID<br />
          echo $env:AWS_SECRET_ACCESS_KEY
        </code>
      </pre>

      <h2>Step 4: Persist the Environment Variables (Optional)</h2>
      <p>If you want to make these environment variables persistent across PowerShell sessions, you can add the commands to your PowerShell profile script. Here’s how:</p>
      <ol>
        <li>Open your PowerShell profile script. If it doesn't exist, create one:</li>
        <pre>
          <code>
            notepad $PROFILE
          </code>
        </pre>
        <li>Add the following lines to the profile script, replacing YOUR_ACCESS_KEY and YOUR_SECRET_KEY with your actual AWS credentials:</li>
        <pre>
          <code>
            $env:AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"<br />
            $env:AWS_SECRET_ACCESS_KEY="YOUR_SECRET_KEY"
          </code>
        </pre>
        <li>Save and close the profile script.</li>
        <li>Reload the profile or restart PowerShell to apply the changes:</li>
        <pre>
          <code>
            . $PROFILE
          </code>
        </pre>
      </ol>

      <h2>Full Example in PowerShell</h2>
      <p>Here's a full example that you can run directly in your PowerShell session:</p>
      <pre>
        <code>
          # Set AWS environment variables<br />
          $env:AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"<br />
          $env:AWS_SECRET_ACCESS_KEY="YOUR_SECRET_KEY"<br />
          <br />
          # Verify they are set<br />
          echo $env:AWS_ACCESS_KEY_ID<br />
          echo $env:AWS_SECRET_ACCESS_KEY
        </code>
      </pre>

      <h2>Troubleshooting Tips</h2>
      <ul>
        <li>Ensure you replace the placeholders (YOUR_ACCESS_KEY and YOUR_SECRET_KEY) with actual values.</li>
        <li>Double-check the values are correct by running the echo commands to see the currently set values.</li>
        <li>Remember that these environment variables are session-specific. If you open a new PowerShell window, you'll need to set them again unless you've added them to your profile script.</li>
      </ul>
      <p>Here's a full example of RAG EMBEDDINGS that you can run directly in your PowerShell session:</p>
      <pre>
        <code>
            from langchain_openai import OpenAIEmbeddings<br/>
            from langchain_community.vectorstores import Chroma<br/>
            import os<br/>
            import shutil<br/>
            <br/>
            CHROMA_PATH = "chroma"<br/>
            DATA_PATH = "data/books"<br/>

            <br/>
            def main():<br/>
                generate_data_store()<br/>
                <br/>

            def generate_data_store():<br/>
                documents = load_documents()<br/>
                chunks = split_text(documents)<br/>
                save_to_chroma(chunks)<br/>
                <br/>

            def load_documents():<br/>
                loader = DirectoryLoader(DATA_PATH, glob="*.md")<br/>
                documents = loader.load()<br/>
                return documents<br/>
                <br/>

            def split_text(documents: list[Document]):<br/>
                text_splitter = RecursiveCharacterTextSplitter(<br/>
                    chunk_size=300,<br/>
                    chunk_overlap=100,<br/>
                    length_function=len,<br/>
                    add_start_index=True,<br/>
                )<br/>
                chunks = text_splitter.split_documents(documents)<br/>
                "print(f"Split len(documents) documents into len(chunks) chunks.")<br/>

                document = chunks[10]<br/>
                print(document.page_content)<br/>
                print(document.metadata)<br/>

                return chunks<br/>
                <br/>

            def save_to_chroma(chunks: list[Document]):<br/>
                # Clear out the database first.<br/>
                if os.path.exists(CHROMA_PATH):<br/>
                    shutil.rmtree(CHROMA_PATH)<br/>

                # Create a new DB from the documents.<br/>
                db = Chroma.from_documents(<br/>
                    chunks, OpenAIEmbeddings(), persist_directory=CHROMA_PATH<br/>
                )<br/>
                db.persist()<br/>
                print(f"Saved len(chunks) chunks to CHROMA_PATH.")<br/>
                <br/>

            if __name__ == "__main__":<br/>
                main()<br/>
        </code>
      </pre>
      <h2>To configure AWS access keys using the aws configure command, follow these steps:</h2>
      <ol>
        <li>Open a Terminal or Command Prompt: Open a terminal window or command prompt on your computer.</li>
        <li>Run the aws configure Command: Type the following command and press Enter: <code>aws configure</code></li>
        <li>Enter Your AWS Access Key ID: You will be prompted to enter your AWS Access Key ID. This is a long alphanumeric string associated with your AWS account. Type it in and press Enter.</li>
        <li>Enter Your AWS Secret Access Key: Next, you will be prompted to enter your AWS Secret Access Key. This is another long alphanumeric string associated with your AWS account. Type it in and press Enter.</li>
        <li>Enter Default Region: You will be prompted to enter the default AWS region. This is the region where most of your resources are located or where you want your commands to operate by default. Type in the desired region code (e.g., us-west-2) and press Enter.</li>
        <li>Enter Default Output Format: You will be prompted to enter the default output format. This determines how the command output is formatted. Choose one of the options (json, text, table) and press Enter.</li>
        <li>Verification: After you enter all the required information, the AWS CLI will display a confirmation message showing that the configuration was successful.</li>
      </ol>
      <p>That's it! You have now configured your AWS access keys using the aws configure command. The configuration details are stored locally on your computer and will be used by the AWS CLI for subsequent commands. Remember to keep your access keys secure and not share them with unauthorized users.</p>
      </section>
      <Ollama/>
    </div>
  );
};

export default CondaDocumentation;
