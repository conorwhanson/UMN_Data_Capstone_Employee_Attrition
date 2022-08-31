-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "EmpPersonalInfo" (
    "EmployeeID" int   NOT NULL,
    "Age" int   NOT NULL,
    "EducationID" int   NOT NULL,
    "EducationFieldID" int   NOT NULL,
    "Gender" string   NOT NULL,
    "MarriageID" int   NOT NULL,
    "NumCompaniesWorked" int   NOT NULL,
    "TotalWorkingYears" int   NOT NULL,
    CONSTRAINT "pk_EmpPersonalInfo" PRIMARY KEY (
        "EmployeeID"
     )
);

CREATE TABLE "EmpWorkInfo" (
    "EmpWorkID" int   NOT NULL,
    "EmployeeID" int   NOT NULL,
    "Attrition" string   NOT NULL,
    "BusinessTravelID" int   NOT NULL,
    "DepartmentID" int   NOT NULL,
    "JobLevel" int   NOT NULL,
    "JobRoleID" int   NOT NULL,
    "MonthlyIncome" int   NOT NULL,
    "PercentSalaryHike" int   NOT NULL,
    "StandardHours" int   NOT NULL,
    "StockOptionLevel" int   NOT NULL,
    "TrainingTimesLastYear" int   NOT NULL,
    "YearsAtCompany" int   NOT NULL,
    "YearsSinceLastPromotion" int   NOT NULL,
    "YearsWithCurrManager" int   NOT NULL,
    CONSTRAINT "pk_EmpWorkInfo" PRIMARY KEY (
        "EmpWorkID"
     )
);

CREATE TABLE "RatingKey" (
    "RatingID" int   NOT NULL,
    "Rating" String   NOT NULL,
    CONSTRAINT "pk_RatingKey" PRIMARY KEY (
        "RatingID"
     )
);

CREATE TABLE "EmpSurvey" (
    "EmpSurveyID" int   NOT NULL,
    "EmployeeID" int   NOT NULL,
    "EnvironmentSatisfaction" int   NOT NULL,
    "JobSatisfaction" int   NOT NULL,
    "WorkLifeBalance" int   NOT NULL,
    CONSTRAINT "pk_EmpSurvey" PRIMARY KEY (
        "EmpSurveyID"
     )
);

CREATE TABLE "ManagerSurvey" (
    "ManagerSurveyID" int   NOT NULL,
    "EmployeeID" int   NOT NULL,
    "JobInvolvement" int   NOT NULL,
    "PerformanceRating" int   NOT NULL,
    CONSTRAINT "pk_ManagerSurvey" PRIMARY KEY (
        "ManagerSurveyID"
     )
);

CREATE TABLE "EducationKey" (
    "EducationID" int   NOT NULL,
    "Education" string   NOT NULL,
    CONSTRAINT "pk_EducationKey" PRIMARY KEY (
        "EducationID"
     )
);

CREATE TABLE "BusinessTravelKey" (
    "BusinessTravelID" int   NOT NULL,
    "BusinessTravel" string   NOT NULL,
    CONSTRAINT "pk_BusinessTravelKey" PRIMARY KEY (
        "BusinessTravelID"
     )
);

CREATE TABLE "MarriageKey" (
    "MarriageID" int   NOT NULL,
    "MaritalStatus" string   NOT NULL,
    CONSTRAINT "pk_MarriageKey" PRIMARY KEY (
        "MarriageID"
     )
);

CREATE TABLE "EducationFieldKey" (
    "EducationFieldID" int   NOT NULL,
    "EducationField" string   NOT NULL,
    CONSTRAINT "pk_EducationFieldKey" PRIMARY KEY (
        "EducationFieldID"
     )
);

CREATE TABLE "DepartmentKey" (
    "DepartmentID" int   NOT NULL,
    "Department" string   NOT NULL,
    CONSTRAINT "pk_DepartmentKey" PRIMARY KEY (
        "DepartmentID"
     )
);

-- Free plan table limit reached. SUBSCRIBE for more.



ALTER TABLE "EmpPersonalInfo" ADD CONSTRAINT "fk_EmpPersonalInfo_EducationID" FOREIGN KEY("EducationID")
REFERENCES "EducationKey" ("EducationID");

ALTER TABLE "EmpPersonalInfo" ADD CONSTRAINT "fk_EmpPersonalInfo_EducationFieldID" FOREIGN KEY("EducationFieldID")
REFERENCES "EducationFieldKey" ("EducationFieldID");

ALTER TABLE "EmpPersonalInfo" ADD CONSTRAINT "fk_EmpPersonalInfo_MarriageID" FOREIGN KEY("MarriageID")
REFERENCES "MarriageKey" ("MarriageID");

ALTER TABLE "EmpWorkInfo" ADD CONSTRAINT "fk_EmpWorkInfo_EmployeeID" FOREIGN KEY("EmployeeID")
REFERENCES "EmpPersonalInfo" ("EmployeeID");

ALTER TABLE "EmpWorkInfo" ADD CONSTRAINT "fk_EmpWorkInfo_BusinessTravelID" FOREIGN KEY("BusinessTravelID")
REFERENCES "BusinessTravelKey" ("BusinessTravelID");

ALTER TABLE "EmpWorkInfo" ADD CONSTRAINT "fk_EmpWorkInfo_DepartmentID" FOREIGN KEY("DepartmentID")
REFERENCES "DepartmentKey" ("DepartmentID");

ALTER TABLE "EmpWorkInfo" ADD CONSTRAINT "fk_EmpWorkInfo_JobRoleID" FOREIGN KEY("JobRoleID")
REFERENCES "Table 11" ("...");

ALTER TABLE "EmpSurvey" ADD CONSTRAINT "fk_EmpSurvey_EmployeeID" FOREIGN KEY("EmployeeID")
REFERENCES "EmpPersonalInfo" ("EmployeeID");

ALTER TABLE "EmpSurvey" ADD CONSTRAINT "fk_EmpSurvey_EnvironmentSatisfaction" FOREIGN KEY("EnvironmentSatisfaction")
REFERENCES "RatingKey" ("RatingID");

ALTER TABLE "EmpSurvey" ADD CONSTRAINT "fk_EmpSurvey_JobSatisfaction" FOREIGN KEY("JobSatisfaction")
REFERENCES "RatingKey" ("RatingID");

ALTER TABLE "EmpSurvey" ADD CONSTRAINT "fk_EmpSurvey_WorkLifeBalance" FOREIGN KEY("WorkLifeBalance")
REFERENCES "RatingKey" ("RatingID");

ALTER TABLE "ManagerSurvey" ADD CONSTRAINT "fk_ManagerSurvey_EmployeeID" FOREIGN KEY("EmployeeID")
REFERENCES "EmpPersonalInfo" ("EmployeeID");

ALTER TABLE "ManagerSurvey" ADD CONSTRAINT "fk_ManagerSurvey_JobInvolvement" FOREIGN KEY("JobInvolvement")
REFERENCES "RatingKey" ("RatingID");

ALTER TABLE "ManagerSurvey" ADD CONSTRAINT "fk_ManagerSurvey_PerformanceRating" FOREIGN KEY("PerformanceRating")
REFERENCES "RatingKey" ("RatingID");

-- Free plan table limit reached. SUBSCRIBE for more.



-- Free plan table limit reached. SUBSCRIBE for more.



