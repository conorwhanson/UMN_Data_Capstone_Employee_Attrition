import pandas as pd
import datetime
import time
import pickle
import numpy as np
from sqlalchemy import create_engine, inspect

class SQLHelper():
    def __init__(self):
        self.database_path = "HR_Attrition.db"
        self.conn_string = f"sqlite:///{self.database_path}"

        # Create an engine that can talk to the database
        self.engine = create_engine(self.conn_string)

    def getDataFromDb(self, sex_flag, min_age, max_age, attrition):

        query = f"""
                SELECT
                    pi.EmployeeID, 
                    Age, 
                    EducationID, 
                    EducationFieldID,
                    DistanceFromHome, 
                    Gender, 
                    MarriageID, 
                    NumCompaniesWorked,
                    TotalWorkingYears,
                    Attrition, 
                    BusinessTravelID, 
                    DepartmentID, 
                    JobLevel,
                    JobRoleID, 
                    MonthlyIncome, 
                    PercentSalaryHike,  
                    StandardHours,
                    StockOptionLevel, 
                    TrainingTimesLastYear, 
                    YearsAtCompany,
                    YearsSinceLastPromotion, 
                    YearsWithCurrManager
                FROM
                    EmpPersonalInfo pi
                LEFT JOIN EmpWorkInfo wi ON
                    pi.EmployeeID = wi.EmployeeID
                WHERE
                    Age >= {min_age}
                    AND Age <= {max_age}
                    AND Gender in ({sex_flag})
                    AND Attrition in ({attrition});
                    """

        print(query)

        df = pd.read_sql(query, con=self.engine)

        return df