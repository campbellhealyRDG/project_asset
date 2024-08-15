import csv
from get_files import file_names

# Load the spreadsheet
file_names = file_names()

def generate_create_table_query(table_name, column_list):
    # Start with the basic CREATE TABLE statement
    create_table_query = f"CREATE TABLE {table_name} (\n"
    
    # Add the id column with auto-increment and not null
    create_table_query += "    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,\n"
    
    # Add columns from the list
    for column_name in column_list:
        create_table_query += f"    {column_name} VARCHAR(255),\n"
    
    # Remove the trailing comma from the last column definition
    create_table_query = create_table_query.rstrip(',\n') + "\n"
    
    # Close the CREATE TABLE statement
    create_table_query += ");"
    
    return create_table_query

for file_name in file_names:
    file_path = 'asset/' + file_name
    file_name = file_name[:-4]
    output_file = 'output/create_table_' + file_name + '.txt'


    # try:
    # Read Headers from the CSV file with utf-8-sig encoding to remove BOM
    with open(file_path, mode='r', newline='', encoding='utf-8-sig') as file:
        csv_reader = csv.reader(file)
        headers = next(csv_reader)
        
    info =  generate_create_table_query(file_name, headers)
    print(info)
    print()
    # print(f"Headers successfully written to {output_file}")
    with open(output_file, mode='w') as file:
          file.write(info)
