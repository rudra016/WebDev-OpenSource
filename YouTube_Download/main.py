import os
from pytube import YouTube
from flask import Flask, request, redirect, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        video_url = request.form['video_url']
        
        try:
            yt = YouTube(video_url)
            stream = yt.streams.get_highest_resolution()
            download_folder = 'downloads'

            if not os.path.exists(download_folder):
                os.makedirs(download_folder)

            stream.download(output_path=download_folder)
            return "Video downloaded successfully!"
        except Exception as e:
            return f"An error occurred: {str(e)}"

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
