import React from 'react';
import './CondaDocumentation.css';


const AwsEmbeddingsOllama = () => {
  return (
    <div className="conda-docs"> 
        <h1>Setup AWS Embeddings in RAG (Ollama (Mistral)) LLM model Application (Augumented with pdf files)</h1>
      <section>     
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

    </div>
  );
};

export default AwsEmbeddingsOllama;
