# /backend/models.py
from config import db

# Define models for pvals and gates tables
class SmartDevices(db.Model):
    __tablename__ = 'validators'
    id = db.Column(db.Integer, primary_key=True)
    station_facility_owner = db.Column('Station facility owner', db.String(255)) 
    station_name = db.Column('Station name', db.String(255)) 
    nlc = db.Column('National Location Code (NLC)', db.String(255)) 
    tlc = db.Column('Three Letter Code (TLC)', db.String(255)) 
    postcode = db.Column('Postcode', db.String(255)) 
    longitude = db.Column('Ordnance Survey grid: longitude', db.String(255)) 
    latitude = db.Column('Ordnance Survey grid: latitude', db.String(255)) 
    cubic_gates = db.Column('Cubic Gates', db.String(255)) 
    vix_pvals = db.Column('VIX PVALS', db.String(255)) 
    snb_pvals = db.Column('S+B PVAL', db.String(255)) 
    snb_gates = db.Column('S+B Gates', db.String(255)) 
    validation_device_numbers = db.Column('Number of Smartcard Validation devices', db.String(255)) 
    one_smart_device = db.Column('At least 1 Smartcard Validation devices', db.String(255)) 
    lta = db.Column('London Travelcard Area', db.String(255)) 

class Gates(db.Model):
    __tablename__ = 'cubic_gates'
    id = db.Column(db.Integer, primary_key=True)
    station_facility_owner = db.Column('Operator', db.String(255)) 
    station_name = db.Column('Station', db.String(255)) 
    code = db.Column('Code', db.String(255)) 
    cubic_name = db.Column('Cubic Name', db.String(255)) 
    nlc = db.Column('NLC', db.String(255)) 
    gated = db.Column('Gated', db.String(255)) 

class DataTable(db.Model):
    __tablename__ = 'data_table'
    id = db.Column(db.Integer, primary_key=True)
    toc_description = db.Column('TOC/Third Party Description', db.String(255)) 
    location_description = db.Column('Location Description', db.String(255)) 
    location_code = db.Column('Location Code', db.String(255)) 
    toc_code = db.Column('TOC/Third Party Code', db.String(255)) 
    retail_channel = db.Column('Retail Channel', db.String(255)) 
    white_label = db.Column('Whitelabel', db.String(255)) 

class EveryNlc(db.Model):
    __tablename__ = 'every_nlc'
    id = db.Column(db.Integer, primary_key=True)
    nlc_code = db.Column('NLC Code', db.String(255)) 
    location_name_lennon = db.Column('LOCATION NAME - LENNON', db.String(255)) 
    location_name_fares_service = db.Column('LOCATION NAME - FARES SERVICE', db.String(255)) 
    location_type = db.Column('LOCATION TYPE', db.String(255)) 

class InboundaryStations(db.Model):
    __tablename__ = 'inboundary_stations'
    id = db.Column(db.Integer, primary_key=True)
    sfo = db.Column('SFO', db.String(255)) 
    station_name = db.Column('Station name', db.String(255)) 
    national_location_code = db.Column('National Location Code (NLC)', db.String(255)) 
    three_letter_code = db.Column('Three Letter Code (TLC)', db.String(255)) 
    postcode = db.Column('Postcode', db.String(255)) 

class LocationData(db.Model):
    __tablename__ = 'location_data'
    id = db.Column(db.Integer, primary_key=True)
    station_name = db.Column('Station name', db.String(255)) 
    national_location_code = db.Column('National Location Code (NLC)', db.String(255)) 
    three_letter_code = db.Column('Three Letter Code (TLC)', db.String(255)) 
    column1 = db.Column('Column1', db.String(255)) 
    os_easting = db.Column('Ordnance Survey grid: Easting', db.String(255)) 
    os_northing = db.Column('Ordnance Survey grid: Northing', db.String(255)) 

class SnbGates(db.Model):
    __tablename__ = 'sb_gates'
    id = db.Column(db.Integer, primary_key=True)
    station_location = db.Column('Station Location', db.String(255)) 
    unnamed1 = db.Column('Unnamed: 1', db.String(255)) 
    unnamed2 = db.Column('Unnamed: 2', db.String(255)) 
    unnamed3 = db.Column('Unnamed: 3', db.String(255)) 
    unnamed4 = db.Column('Unnamed: 4', db.String(255)) 
    unnamed5 = db.Column('Unnamed: 5', db.String(255)) 

class SnbPvals(db.Model):
    __tablename__ = 'sb_pvals'
    id = db.Column(db.Integer, primary_key=True)
    TOC = db.Column('Train Operator', db.String(255)) 
    station = db.Column('Station', db.String(255)) 
    nlc = db.Column('NLC', db.String(255)) 
    proposed_pval_number = db.Column('Proposed PVAL Number', db.String(255)) 
    suggested_pval_number = db.Column('Suggested PVAL number', db.String(255)) 
    comment = db.Column('Comments', db.String(255)) 

class Stations(db.Model):
    __tablename__ = 'stations'
    id = db.Column(db.Integer, primary_key=True)
    station_name = db.Column('Station name', db.String(255)) 
    nlc = db.Column('National Location Code (NLC)', db.String(5)) 
    tlc = db.Column('Three Letter Code (TLC)', db.String(3)) 
    has_ticket_gate = db.Column('Station has a Ticket Gate', db.String(255)) 
    ticket_gates = db.Column('Ticket Gates', db.String(255)) 
    cubic_gates = db.Column('Cubic Gates', db.String(255)) 
    vix_pvals = db.Column('VIX PVALS', db.String(255)) 
    snb_pvals = db.Column('S+B PVAL', db.String(255)) 
    snb_gates = db.Column('S+B Gates', db.String(255)) 
    total_devices = db.Column('Total Devices', db.String(255)) 
    totals_2122 = db.Column('Apr 2021 to Mar 2022 Entries and exits: Total', db.String(255)) 
    rank_2122 = db.Column('Apr 2021 to Mar 2022 Entries and exits: Rank', db.String(255)) 
    interchanges_2122 = db.Column('Apr 2021 to Mar 2022: Interchanges', db.String(255)) 
    region = db.Column('Region', db.String(255)) 
    TOC = db.Column('Station facility owner', db.String(255)) 
    sfo = db.Column('SFO Short Code', db.String(255)) 
    station_group = db.Column('Station group', db.String(255)) 
    lta = db.Column('London Travelcard Area', db.String(255)) 

class VixPvals(db.Model):
    __tablename__ = 'vix_pvals'
    id = db.Column(db.Integer, primary_key=True)
    station = db.Column('Station', db.String(255)) 
    nlc = db.Column('NLC Code', db.String(255)) 
    crscode = db.Column('CRSCode', db.String(255)) 
    hostname = db.Column('HostName', db.String(255)) 
    platform_position = db.Column('Platform Position', db.String(255)) 
    unnamed = db.Column('Unnamed', db.String(255)) 
    operator = db.Column('Operator', db.String(255)) 
    station_1 = db.Column('Station_1', db.String(255)) 
    total_pvals = db.Column('Total PVALS', db.String(255)) 
