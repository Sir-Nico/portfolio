import requests

def mi_bombo(item):
    response = requests.post("http://10.24.46.232/items", json=item)
    return response.json()
    

if __name__ == "__main__":
    nuevo_item = {
        "id": 69696969,
        "name": "Faxe 10% Extra Strong",
        "price": 122.90
    }

    while True:
        result = mi_bombo(nuevo_item)