from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/search')
def search():
	query = request.args.get('q', '')
	if not query:
		return jsonify({"results": []})

	mock_results = [
		{
			"title": f"{query} - Limited Edition Vinyl",
			"format": "Vinyl",
			"condition": "VG+",
			"price": "$25.00",
			"link": "https://example.com/listing1"
		},
		{
			"title": f"{query} - Original Cassette",
			"format": "Cassette",
			"condition": "NM",
			"price": "$18.00",
			"link": "https://example.com/listing2"
		}
	]
	return jsonify({"results": mock_results})

if __name__ == '__main__':
	app.run(debug=True)
