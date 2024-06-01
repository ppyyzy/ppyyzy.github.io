// 假设这是您想要执行的异步操作（例如发送 fetch 请求）  
function fetchData() {  
    // 显示“请稍后”的消息  
    showLoadingMessage();  
  
    // 模拟异步操作（例如 fetch 请求）  
    setTimeout(function() {  
        // 假设这是从服务器获取的数据  
        var data = '<div>数据正在加载，请稍后！</div>';  
  
        // 隐藏或移除“请稍后”的消息  
        hideLoadingMessage();  
  
        // 将数据插入到 result-container 中  
        document.getElementById('result-container').innerHTML = data;  
    }, 2000); // 假设异步操作需要2秒  
}  
  
// 显示“请稍后”的消息  
function showLoadingMessage() {  
    document.getElementById('loading-message').style.display = 'block';  
}  
  
// 隐藏或移除“请稍后”的消息  
function hideLoadingMessage() {  
    document.getElementById('loading-message').style.display = 'none';  
}  
  
// 页面加载完成后执行 fetchData 函数  
window.onload = fetchData;

async function fetchDomainList() {  
    try {  
        const response = await fetch('https://txt.ppyy19.shop/yuu.php');  
        if (!response.ok) {  
            throw new Error(`HTTP error! status: ${response.status}`);  
        }  
        return response.json(); // 解析 JSON 响应  
    } catch (error) {  
        console.error('Failed to fetch domain list:', error);  
        return []; // 或者你可以抛出一个错误  
    }  
}  
let availableDomain; // 声明一个外部变量来存储可用域名  
   console.log(availableDomain); 
   
async function checkDomains() {    
    try {    
        const domainList = await fetchDomainList(); // 假设这个函数返回Promise并解析为域名列表  
  
        for (const domain of domainList) {    
            try {    
                // 尝试发送HEAD请求到域名    
                const response = await fetch(`https://${domain}`, { method: 'HEAD' });    
                // 检查是否收到了响应，并且状态码在200-399之间（或根据需求调整）  
                if (response.ok) {    
                    //console.log(`${domain} is available`);     
                    availableDomain = domain; // 设置外部变量  
                    return; // 找到后直接返回，停止检查其他域名  
                } else {    
                    // 域名不可用，继续检查下一个  
                    //console.log(`${domain} is not available`);     
                }    
            } catch (error) {    
                // 如果fetch失败（比如DNS解析失败），则域名不可用  
                console.error(`${domain}:不可用`); 
                try {  
            // 注意使用反引号来定义模板字符串，并使用 ${domain} 进行插值  
            const fallbackResponse = await fetch(`https://txt.ppyy19.shop/sd.php?url=${domain}`);  
            // 处理fallbackResponse...  
            console.log('Fallback request sent:', fallbackResponse.ok ? 'Success' : 'Failed');  
        } catch (fallbackError) {  
            // 处理fallback请求的错误  
            console.error('Fallback request failed:', fallbackError);  
        } 
        
        
            }      
        }  
  
        // 如果没有找到可用的域名  
        availableDomain = null; // 可以设置为null或undefined，或者抛出错误  
    } catch (error) {    
        console.error('Error during domain check:', error);    
        availableDomain = null; // 如果有错误，也设置变量为null  
    }    
}    
  
// 开始检查域名  
checkDomains().then(() => {  
    if (availableDomain) {  
        //console.log(`Available domain found: ${availableDomain}`);  

            var url = 'https://' + availableDomain+'?dom=' + availableDomain;   
            var uselink = [url, url]; 
        var t = 3;
        var microwap = navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger" ? true : false;
        var main = document.getElementsByClassName('main')[0];
        var showlink = document.getElementsByClassName('showlink')[0];
        var foot = document.getElementById('foot').getElementsByTagName('span')[0];
        var foothtml = '<p>Android建議使用<a href="https://lemurbrowser.com/new_version_test/app/zh.html">狐猴</a>瀏覽器</p>' +
            '<p>Iphone建議使用內置<a>Safari</a>瀏覽器</p>' +
            '<p>大陸地區請馬上離開，不要瀏覽/轉發</p>' +
            '<p>ppyyzy是一個非盈利性的聚合站點</p>' +
            '<p>我們的宗旨是為所有愛好者提供完全免費多樣的影片</p>' +
            '<p>請看管好您的設備，不要使未成年人接觸到我們</p>' +
            '<p>聯絡電郵：ppyyzy@outlook.com</p>';

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
                    '<p>发布页地址1：<a href="https://ppyyzy.com"><span class="host">ppyyzy.com</span></a></p> ' +
                    '<p>发布页地址2：<a href="https://ppyyzy.github.io"><span class="host">ppyyzy.github.io</span></a></p>' +
                    '<p>防止走丢，请保存上面的发布页到书签。</p>' +
                    '<p style="color:red">可通過本頁面或下面方式取得新地址</p>');
                showlink.insertAdjacentHTML('afterBegin', '<p>新的地址</p><SPAN class="link" id="use"></SPAN>' +
                    '<p>备用地址</p><a href="https://www.ezhih.com"><span class="btn ping">Ping...</span><span class="host">www.ezhih.com</span></a><br>'+
                    '<br>再次提醒<SPAN style="color:red;">请保存此页面为书签</SPAN><br>' +
                    '<br>请牢记发布页<SPAN style="color:red;">ppyyzy.github.io和ppyyzy.com</SPAN><br>' +
                    '<a class="btn" href="https://www.ebay.com/usr/ppyyzy">ebay</a>或聯絡郵箱<SPAN style="color:red;">ppyyzy@outlook.com</SPAN>取得新地址' +
                    '<br><div class="ps">若出現網址打不開，或出現<SPAN class="ssl">https</SPAN>（<SPAN style="color:red">證書不一致</SPAN>）時' +
                    '<br>已確定是您當地的DNS伺服器被入侵劫持。<br>您可以將DNS伺服器更換為<br><SPAN style="color:gold">Google DNS（慣用：8.8.8.8）（備用：8.8.4.4）</SPAN>' +
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
                    el.insertAdjacentHTML('beforeEnd', '<A href="' + e + '"><SPAN class="btn ping">Ping...</SPAN><SPAN class="host">' + e.split('/')[2] + '</SPAN></A>');
                });
            };
            showurl();
            re('content');
            re('foot');
            addlink('use', uselink);
        };
        const gonggaoContent = document.getElementById('ggao');  
const gonggaoHtml = `<H1>ppyyzy-最新地址</H1>
                <P>最新網路上有很多冒牌的ppyyzy網站， 一旦點擊進去就會發現不是我們，而且會跳轉到收費，或者不能正常使用的站點。 ppyyzy是完全免費的並且不需要登入會員也不會讓您試看然後沒有後續的網站。正確的地址有ppyyzy.com這個地址,后续会增加更多备用地址。除此之外全部都是冒牌的惡意網站，請您詳細辨認。</P>`;  
    gonggaoContent.innerHTML = gonggaoHtml;  
    
        // 在这里可以使用availableDomain变量  
    } else {  
       console.log('No domains are available.');  
    }  
});  
 
