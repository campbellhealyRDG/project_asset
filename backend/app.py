# app.py

from flask import Flask, jsonify
from flask_cors import CORS
from config import init_app, db
from models import (SmartDevices, Gates, DataTable, 
                    EveryNlc, InboundaryStations,LocationData,
                    SnbGates,SnbPvals, Stations,
                    VixPvals
                    )

app = Flask(__name__)
CORS(app)

# Initialize the app with the database configuration
init_app(app)

# Routes to get data from pvals and gates tables
@app.route('/smartdevices', methods=['GET'])
def get_smartdevices():
    smartdevices = SmartDevices.query.all()
    
    # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'TOC': smartdevice.station_facility_owner, 
                'Station': smartdevice.station_name,
                'NLC': (smartdevice.nlc)[:-2],
                'TLC': (smartdevice.tlc)[:-2],
                'Postcode': smartdevice.postcode,
                'Longitude': smartdevice.longitude,
                'Latitude': smartdevice.latitude,
                'CubicGates': smartdevice.cubic_gates,
                'VixPvals': smartdevice.vix_pvals,
                'SnbPvals': smartdevice.snb_pvals,
                'SnbGates': smartdevice.snb_gates,
                'ValidationDeviceNumbers': smartdevice.validation_device_numbers,
                'OneSmartDevice': smartdevice.one_smart_device,
                'Lta': smartdevice.lta
                } for smartdevice in smartdevices
        ])

    return jsonify(result)

@app.route('/gates', methods=['GET'])
def get_gates():
    gates = Gates.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'TOC': gate.station_facility_owner, 
                'Station': gate.station_name,
                'CubicName': gate.cubic_name,
                'NLC': (gate.nlc),
                'Gated': gate.gated
                } for gate in gates
        ])

    return jsonify(result)


@app.route('/data', methods=['GET'])
def get_data():
    all_data = DataTable.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'TOC': data.toc_description, 
                'LocationDescription': data.location_description,
                'LocationCode': data.location_code,
                'TocCode': data.toc_code,
                'RetailChannel': data.retail_channel,
                'WhiteLabel': data.white_label
                } for data in all_data
        ])

    return jsonify(result)

@app.route('/everynlc', methods=['GET'])
def get_everynlc():
    all_data = EveryNlc.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'NLCCode': data.nlc_code, 
                'LocationNameLennon': data.location_name_lennon,
                'LocationNameFaresService': data.location_name_fares_service,
                'LocationType': data.location_type
                } for data in all_data
        ])

    return jsonify(result)

@app.route('/inboundarystations', methods=['GET'])
def get_inboundarystations():
    inboundary_stations = InboundaryStations.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'SFO': inboundary_station.sfo, 
                'StationName': inboundary_station.station_name,
                'LocationCode': inboundary_station.national_location_code,
                'ThreeLetterCode': inboundary_station.three_letter_code,
                'Postcode': inboundary_station.postcode
                } for inboundary_station in inboundary_stations
        ])

    return jsonify(result)

@app.route('/locationdata', methods=['GET'])
def get_locationdata():
    location_data = LocationData.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'StationName': location.station_name,
                'LocationCode': (location.national_location_code)[:-2],
                'ThreeLetterCode': location.three_letter_code,
                'Column1': location.column1,
                'OSEasting': location.os_easting,
                'OSNorthing': location.os_northing
                } for location in location_data
        ])

    return jsonify(result)

@app.route('/snbgates', methods=['GET'])
def get_snbgates():
    snb_gates = SnbGates.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'StationLocation': snb_gate.station_location,
                'Unnamed1': snb_gate.unnamed1,
                'Unnamed2': snb_gate.unnamed2,
                'Unnamed3': snb_gate.unnamed3,
                'Unnamed4': snb_gate.unnamed4,
                'Unnamed5': snb_gate.unnamed5
                } for snb_gate in snb_gates
        ])

    return jsonify(result)

@app.route('/snbpvals', methods=['GET'])
def get_snbpvals():
    snbpvals = SnbPvals.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'TOC': snbpval.TOC,
                'Station': snbpval.station,
                'NLC': (snbpval.nlc),
                'ProposedPvalNumber': (snbpval.proposed_pval_number)[:-2],
                'SuggestedPvalNumber': (snbpval.suggested_pval_number)[:-2],
                'Comment': snbpval.comment
                } for snbpval in snbpvals
        ])

    return jsonify(result)

@app.route('/stations', methods=['GET'])
def get_stations():
    stations = Stations.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
                'Station': station.station_name,
                'Nlc': (station.nlc)[:-2],
                'Tlc': station.tlc,
                'HasTicketGate': station.has_ticket_gate,
                'TicketsGates': station.ticket_gates,
                'CubicGates': station.cubic_gates,
                'VixPvals': station.vix_pvals,
                'SnbPvals': station.snb_pvals,
                'SnbGates': station.snb_gates,
                'TotalDevices': station.total_devices,
                'Totals2122': station.totals_2122,
                'Rank2122': station.rank_2122,
                'Interchanges2122': station.interchanges_2122,
                'Region': station.region,
                'TOC': station.TOC,
                'Sfo': station.sfo,
                'StationGroup': station.station_group,
                'Lta': station.lta
                } for station in stations
        ])

    return jsonify(result)

@app.route('/vixpvals', methods=['GET'])
def get_vixpvals():
    vix_pvals = VixPvals.query.all()
        # Convert the SQLAlchemy objects into a list of dictionaries
    result = ([{
            'Station': vix_pval.station,
            'Nlc': (vix_pval.nlc)[:-2],
            'CrsCode': vix_pval.crscode,
            'HostName': vix_pval.hostname,
            'PlatformPosition': (vix_pval.platform_position)[:-2],
            'Unnamed': vix_pval.unnamed,
            'Operator': vix_pval.operator,
            'Station1': vix_pval.station_1,
            'TotalPvals': (vix_pval.total_pvals)[:-2]
                } for vix_pval in vix_pvals
        ])

    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081,debug=True)
