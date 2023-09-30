from bs4 import BeautifulSoup
import json

# Read index.html file
with open('index.html', 'r', encoding='utf-8') as file:
    html_data = file.read()

# Parse HTML with Beautiful Soup
soup = BeautifulSoup(html_data, 'html.parser')

# Find all divs with class="injectStyles-sc-1jy9bcf-0 eRJwMX"
div_list = soup.find_all('div', class_='injectStyles-sc-1jy9bcf-0 eRJwMX')

data = []

# Iterate through each div
for div in div_list:
    link = ''
    price = ''
    title = ''
    size = ''

    # Find img with class="img-wrpr__img"
    img = div.find('img', class_='img-wrpr__img')
    if img:
        link = img.get('src', '')

    # Find span with class="rupee"
    span_price = div.find('span', class_='rupee')
    if span_price:
        price = span_price.text

    # Find span with class="itm-dsc__nm"
    span_title = div.find('span', class_='itm-dsc__nm')
    if span_title:
        title = span_title.text

    # Find div with datalabel="size" class="itm-dsc__actn__sz__dd-ttl"
    div_size = div.find('div', attrs={'datalabel': 'size', 'class': 'itm-dsc__actn__sz__dd-ttl'})
    if div_size:
        size = div_size.text

    # Add data to list
    data.append({'link': link, 'price': price, 'title': title, 'size': size})

# Write data to data.json in JSON format
with open('data.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii=False)
