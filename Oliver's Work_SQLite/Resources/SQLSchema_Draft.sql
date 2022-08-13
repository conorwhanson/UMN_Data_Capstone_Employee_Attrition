-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "EmpPersonalInfo" (
    "EmployeeID" int   NOT NULL,
    "Age" int   NOT NULL,
    "EducationID" int   NOT NULL,
    "EducationFieldID" int   NOT NULL,
    "Gender" string   NOT NULL,
    "MaritalStatus" string   NOT NULL,
    "NumCompaniesWorked" int   NOT NULL,
    "Over18" string   NOT NULL,
    "TotalWorkingYears" int   NOT NULL,
    CONSTRAINT "pk_EmpPersonalInfo" PRIMARY KEY (
        "EmployeeID"
     )
);

CREATE TABLE "EmpWorkInfo" (
    "OrderID" int   NOT NULL,
    "EmployeeID" int   NOT NULL,
    "Attrition" string   NOT NULL,
    "BusinessTravel" string   NOT NULL,
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
        "OrderID"
     )
);

CREATE TABLE "EmpSurvey" (
    "EmployeeID" int   NOT NULL,
    "EnvironmentSatisfaction" int   NOT NULL,
    "JobSatisfaction" int   NOT NULL,
    "WorkLifeBalance" int   NOT NULL
);

CREATE TABLE "ManagerSurvey" (
    "EmployeeID" int   NOT NULL,
    "JobInvolvement" int   NOT NULL,
    "PerformanceRating" int   NOT NULL
);

CREATE TABLE "EducationKey" (
    "EducationID" int   NOT NULL,
    "Education" string   NOT NULL,
    CONSTRAINT "pk_EducationKey" PRIMARY KEY (
        "EducationID"
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

CREATE TABLE "JobRoleKey" (
    "JobRoleID" int   NOT NULL,
    "JobRole" string   NOT NULL,
    CONSTRAINT "pk_JobRoleKey" PRIMARY KEY (
        "JobRoleID"
     )
);

ALTER TABLE "EmpPersonalInfo" ADD CONSTRAINT "fk_EmpPersonalInfo_EducationID" FOREIGN KEY("EducationID")
REFERENCES "EducationKey" ("EducationID");

ALTER TABLE "EmpPersonalInfo" ADD CONSTRAINT "fk_EmpPersonalInfo_EducationFieldID" FOREIGN KEY("EducationFieldID")
REFERENCES "EducationFieldKey" ("EducationFieldID");

ALTER TABLE "EmpWorkInfo" ADD CONSTRAINT "fk_EmpWorkInfo_EmployeeID" FOREIGN KEY("EmployeeID")
REFERENCES "EmpPersonalInfo" ("EmployeeID");

ALTER TABLE "EmpWorkInfo" ADD CONSTRAINT "fk_EmpWorkInfo_DepartmentID" FOREIGN KEY("DepartmentID")
REFERENCES "DepartmentKey" ("DepartmentID");

ALTER TABLE "EmpWorkInfo" ADD CONSTRAINT "fk_EmpWorkInfo_JobRoleID" FOREIGN KEY("JobRoleID")
REFERENCES "JobRoleKey" ("JobRoleID");

ALTER TABLE "EmpSurvey" ADD CONSTRAINT "fk_EmpSurvey_EmployeeID" FOREIGN KEY("EmployeeID")
REFERENCES "EmpPersonalInfo" ("EmployeeID");

ALTER TABLE "ManagerSurvey" ADD CONSTRAINT "fk_ManagerSurvey_EmployeeID" FOREIGN KEY("EmployeeID")
REFERENCES "EmpPersonalInfo" ("EmployeeID");

