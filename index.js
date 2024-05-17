fetch('https://txt.ppyy19.shop/yumi1.php')  
        .then(response => {  
            if (!response.ok) {  
                throw new Error('Network response was not ok');  
            }  
            return response.text(); // 假设代理服务器返回的是纯文本  
        })  
        .then(data => {  
            // 假设代理服务器返回的是可以直接添加到URL中的文本  
            // 并且你想为每个元素添加 'https://' 前缀  
            var url = 'https://' + data; // 假设 data 是没有前缀的域名或路径  
            var uselink = [url, url]; // 装载到数组中  
  
            // 现在你可以使用 uselink 数组了  
            //console.log(uselink); // 打印数组以验证结果  
  

        
        
        var t = 3;
        var microwap = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger" ? true : false;
        var main = document.getElementsByClassName('main')[0];
        var showlink = document.getElementsByClassName('showlink')[0];
        var foot = document.getElementById('foot').getElementsByTagName('span')[0];
        var foothtml = '<p>Android建議使用<a href="https://www.google.cn/chrome/">Chrome</a>瀏覽器</p>' +
            '<p>Iphone建議使用內置<a>Safari</a>瀏覽器</p>' +
            '<p>大陸地區請馬上離開，不要瀏覽/轉發</p>' +
            '<p>ppyyzy是一個非盈利性的聚合站點</p>' +
            '<p>我們的宗旨是為所有愛好者提供完全免費多樣的影片</p>' +
            '<p>請看管好您的設備，不要使未成年人接觸到我們</p>' +
            '<p>聯絡電郵：ppyyzy@gmail.com</p>';

        if (microwap) {
            main.innerHTML = '';
            main.insertAdjacentHTML('beforeEnd', '<p>請使用瀏覽器打開此页面</p>' +
                '<p>使用Chrome（谷歌瀏覽器）可以解除大部份國家或地區的封鎖</p>' +
                '<p>拷貝地址：<input onfocus="this.select()" value="' + window.location.host + window.location.pathname + '"></p>');
        } else {
            function re(id) {
                let dom = document.getElementById(id);
                let name = dom.localName;
                let re = dom.parentNode;
                let htm = dom.outerHTML;
                let regex = new RegExp('^(.*?)' + name + '(.*?)' + name + '(>)$', 'i');
                let num = Math.floor(Math.random() * (99999 - 100)) + 100;
                htm = htm.replace(/\r|\n/ig, "");
                htm = htm.replace(regex, "$1tag" + num + "$2tag" + num + ">");
                dom.insertAdjacentHTML('afterend', htm);
                re.removeChild(dom);
            };
            function getTime(url, i, dom) {
                let t = Date.now();
                let xhr = new XMLHttpRequest();
                xhr.open("GET", url + "?ping" + Math.random());
                xhr.onerror = function () {
                    if (xhr.readyState == 4) {
                        let ms = Math.floor((Date.now() - t) / 10);
                        el.getElementsByTagName('a')[i].getElementsByClassName('ping')[0].innerHTML = ms + 'ms';
                        if (!over) {
                            over = url;
                            a.href = over;
                        };
                    }
                }
                xhr.send();
            }
            function showurl() {
                main.innerHTML = '';
                foot.innerHTML = '';
                showlink.innerHTML = '';
                main.insertAdjacentHTML('afterBegin',
                    '<p>您可能會無法正常進入ppyyzy.com</p>' +
                    '<p style="color:red">可通過本頁面或下面方式取得新地址</p>');
                showlink.insertAdjacentHTML('afterBegin', '<p>新的地址</p><span class="link" id="use"></span>' +
                    '<br>也可訪問<span style="color:red;">ppyyzy.com</span><br>' +
                    '<a class="btn" href="https://www.ebay.com/usr/ppyyzy">ebay</a>或聯絡郵箱<span style="color:red;">ppyyzy@gmail.com</span>取得新地址' +
                    '<br><div class="ps">若出現網址打不開，或出現<span class="ssl">https</span>（<span style="color:red">證書不一致</span>）時' +
                    '<br>已確定是您當地的DNS伺服器被入侵劫持。<br>您可以將DNS伺服器更換為<br><span style="color:gold">Google DNS（慣用：8.8.8.8）（備用：8.8.4.4）</span>' +
                    '<br>或其它安全的DNS（可使用搜尋引擎查詢DNS設定方法）<br>行動設備可直接使用數據網路流量避免此問題。</div>');
                foot.insertAdjacentHTML('afterBegin', foothtml);
            };
            function addlink(id, arr) {
                let head = document.head || document.getElementsByTagName('head')[0];
                el = document.getElementById(id);
                arr.forEach(function (e, i) {
                    var hint = document.createElement("link");
                    hint.setAttribute("rel", "dns-prefetch");
                    hint.setAttribute("href", e);
                    head.appendChild(hint);
                    var hint2 = document.createElement("link");
                    hint2.setAttribute("rel", "prefetch");
                    hint2.setAttribute("href", e);
                    head.appendChild(hint2);
                    getTime(e, i, el);
                    el.insertAdjacentHTML('beforeEnd', '<a href="' + e + '"><span class="btn ping">Ping...</span><span class="host">' + e.split('/')[2] + '</span></a>');
                });
            };
            showurl();
            re('content');
            re('foot');
            addlink('use', uselink);
        };
        
        
        
        })  
        .catch(error => {  
            console.error('Error fetching data:', error);  
            // 处理错误情况  
        });   
const gonggaoContent = document.getElementById('ggao');  
const gonggaoHtml = `<h1>ppyyzy-最新地址</h1>
                <p>
                    最新網路上有很多冒牌的ppyyzy網站，
                    一旦點擊進去就會發現不是我們，而且會跳轉到收費，或者不能正常使用的站點。
                    ppyyzy是完全免費的並且不需要登入會員也不會讓您試看然後沒有後續的網站。
                    正確的地址有ppyyzy.com這個地址,后续会增加更多备用地址。
                    除此之外全部都是冒牌的惡意網站，請您詳細辨認。
                </p>`;  
      gonggaoContent.innerHTML = gonggaoHtml;  