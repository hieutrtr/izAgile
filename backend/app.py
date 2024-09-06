import os, json
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import PydanticOutputParser
from prompts import generate_features
from structures import proposal
# Auto-load environment variables from .env file
load_dotenv()
def GenerateProposal():
  model = ChatOpenAI(model="gpt-4-turbo-2024-04-09")
  parser = PydanticOutputParser(pydantic_object=proposal.Proposal)
  prompt = generate_features.prompt_template.invoke({
      "project_name": "Permit Manager", 
      "project_requirement": "A software to manage permitting document, provide workflow to create a document to submit for permitting with the Goverment.\
        User can go to website start drafting their document and reference to regulation or rules of municipals and regions.\
          features should be able to support users reference to right information they need for their permitting.",
      "tech_stack": "python for backend, reactjs for frontend, azure for cloud infra.",
      "output_instruction": parser.get_format_instructions()
        })

  result = model.invoke(prompt)
  return json.loads(result.content)

GenerateProposal()