import csv
import os
import pandas as pd

from get_files import file_names

# Load the spreadsheet
file_names = file_names()

for file_name in file_names:
    file_path = 'asset/' + file_name
    file_name = file_name[:-4]
    output_file = 'output/' + file_name + '.txt'
    # Define the table name 
    table_name = file_name
    # print(table_name)

    df = pd.read_csv(file_path)
    # Create a list to store the SQL INSERT queries
    insert_queries = []
    #  Loop through each row in the DataFrame
    for index, row in df.iterrows():
        # Get the column names (headers) as a comma-separated string
        columns = ', '.join(df.columns)
        
        # Get the values from the row as a comma-separated string
        values = ', '.join([f"'{str(value)}'" for value in row.values])
        
        # Create the INSERT query
        insert_query = f"INSERT INTO {table_name} ({columns}) VALUES ({values});"
        
        # Add the query to the list
        insert_queries.append(insert_query)

    # Create a DataFrame from the list of queries
    queries_df = pd.DataFrame(insert_queries, columns=['query'])

    # Save the DataFrame to a text file
    queries_df.to_csv(output_file, index=False, header=False)
    print(f"SQL INSERT queries have been written to {output_file}")
