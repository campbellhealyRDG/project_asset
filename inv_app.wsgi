import os
import sys

# Activate virtual environment
activate_this = 'C:/dts_applications/isaminv_login/venv/Scripts/activate_this.py'
exec(open(activate_this).read(), {'__file__': activate_this})

# Add application directory to Python path
sys.path.insert(0, 'C:/dts_applications/isaminv_login')
from app1 import app as application


import os
import sys

# Activate virtual environment
activate_this = 'C:/dts_applications/project_asset/venv/Scripts/activate_this.py'
exec(open(activate_this).read(), {'__file__': activate_this})

# Add application directory to Python path
sys.path.insert(0, 'C:/dts_applications/project_asset')
from app2 import app as application





