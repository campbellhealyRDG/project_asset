# Get all of the files in a folder
# In this case it is getting all of the asset csv files created from the Lennon spreadsheet
# Information from Steve Lloyd

import os

def file_names():
    
    directory = 'asset' # Specify the directory you want to list
    files = os.listdir(directory) # Get the list of files

    # Filter the list to include only files (and not directories)
    files = [f for f in files if os.path.isfile(os.path.join(directory, f))]

    return files