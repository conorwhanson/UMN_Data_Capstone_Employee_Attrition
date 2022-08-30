import pandas as pd
import numpy as np
from sqlalchemy import create_engine

class GraphHelper():
    def __init__(self):
        self.database_path = "HR_Attrition.db"
        self.conn_string = f"sqlite:///{self.database_path}"

        # Create an engine that can talk to the database
        self.engine = create_engine(self.conn_string)

    def getDataFromDatabase(self, min_age, max_age):

        query = f"""
        SELECT
            Age, 
            Attrition
        FROM
            EmpPersonalInfo
        LEFT JOIN EmpWorkInfo ON
        EmpPersonalInfo.EmployeeID = EmpWorkInfo.EmployeeID
        WHERE Age >= {min_age}
            AND Age <= {max_age};
        """

        print(query)

        df = pd.read_sql(query, con=self.engine)

        df2 = df.Attrition.value_counts()

        return df2

    def getDataFromDatabase2(self, min_age, max_age):

            query = f"""
            SELECT
                Age, 
                Attrition,
                MonthlyIncome
            FROM
                EmpPersonalInfo
            LEFT JOIN EmpWorkInfo ON
            EmpPersonalInfo.EmployeeID = EmpWorkInfo.EmployeeID
            WHERE Age >= {min_age}
                AND Age <= {max_age};
            """

            print(query)

            df = pd.read_sql(query, con=self.engine)

            return df