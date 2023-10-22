import { Injectable } from '@nestjs/common';

@Injectable()
export class StartService {
  getHello(name: string): string {
    return `
    <style>
    body {
      background-color: lightblue;
    }
    
    h1 {
      color: white;
      text-align: center;
    }

    .tenor-gif-embed {
      margin: auto;
      width: 50%;
      border: 3px solid green;
      padding: 40px;
    }
    
    p {
      text-align: center;
      font-family: verdana;
      font-size: 40px;
    }
    </style>
    <div class="tenor-gif-embed" data-postid="24408873" data-share-method="host" data-aspect-ratio="0.940625" data-width="25%"><a href="https://tenor.com/view/hello-gif-24408873">Hello Sticker</a>from <a href="https://tenor.com/search/hello-stickers">Hello Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    <p>${name.toLocaleUpperCase()}......</p>`;
  }
}
