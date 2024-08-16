# backend/config.py
from flask_sqlalchemy import SQLAlchemy
 
db = SQLAlchemy()

# Configure the database URI
def init_app(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://vincent:Asdred2312@10.16.3.66/station_assets'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

