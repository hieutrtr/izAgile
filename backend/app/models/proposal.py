from pydantic import BaseModel, Field, ConfigDict, GetJsonSchemaHandler
from pydantic.json_schema import JsonSchemaValue
from pydantic_core import core_schema as cs
from typing import List, Annotated, Any, Callable
from datetime import datetime
from bson import ObjectId

# class PyObjectId(ObjectId):
#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate

#     @classmethod
#     def validate(cls, v):
#         if not ObjectId.is_valid(v):
#             raise ValueError("Invalid objectid")
#         return ObjectId(v)

#     @classmethod
#     def __get_pydantic_json_schema__(cls, core_schema: cs.CoreSchema, handler: GetJsonSchemaHandler) -> JsonSchemaValue:
#         core_schema.update(type="string")

class _ObjectIdPydanticAnnotation:
    # Based on https://docs.pydantic.dev/latest/usage/types/custom/#handling-third-party-types.

    @classmethod
    def __get_pydantic_core_schema__(
        cls,
        _source_type: Any,
        _handler: Callable[[Any], cs.CoreSchema],
    ) -> cs.CoreSchema:
        def validate_from_str(input_value: str) -> ObjectId:
            return ObjectId(input_value)

        return cs.union_schema(
            [
                # check if it's an instance first before doing any further work
                cs.is_instance_schema(ObjectId),
                cs.no_info_plain_validator_function(validate_from_str),
            ],
            serialization=cs.to_string_ser_schema(),
        )

PyObjectId = Annotated[
    ObjectId, _ObjectIdPydanticAnnotation
]

class Feature(BaseModel):
    name: str = Field(description="The name of the feature")
    description: str = Field(description="A brief description of the feature")
    priority: str = Field(description="The priority level of the feature (e.g., High, Medium, Low)")

class ProjectPhase(BaseModel):
    phase: str = Field(description="The name of the project phase")
    duration: str = Field(description="The duration of the phase")
    key_deliverables: List[str] = Field(description="A list of key deliverables for the phase")

class ClientClarification(BaseModel):
    question: str = Field(description="A clarification question from the client")
    assumption: str = Field(description="The assumption for the clarification question")

class Proposal(BaseModel):
    features: List[Feature] = Field(description="A list of features for the project")
    project_phases: List[ProjectPhase] = Field(description="A list of phases for the project")
    client_clarifications: List[ClientClarification] = Field(description="A list of clarification questions from the client")

class ProposalInDB(BaseModel):
    id: Annotated[PyObjectId, Field(alias="_id", default_factory=PyObjectId)]
    owner: str
    project_name: str
    project_requirement: str
    tech_stack: str
    features: List[Feature] = Field(description="A list of features for the project")
    project_phases: List[ProjectPhase] = Field(description="A list of phases for the project")
    client_clarifications: List[ClientClarification] = Field(description="A list of clarification questions from the client")
    created_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str}
    )