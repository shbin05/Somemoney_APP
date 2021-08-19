import selenium
from selenium import webdriver
import json 
import sys
from newspaper import Article
from load_summary import load

titleList=[]
companyList=[]
linkList=[]
newsList=[]
sumList=[]
imgList=[]
priceList=[]
trendList=[]
colorList=[]
data=[]


def load(url):
    driver = webdriver.Chrome(executable_path='chromedriver')
    driver.get(url)
    cnt=0

    title = driver.find_elements_by_css_selector('#stockNewsContentUl > li.news_list > div.list_info_box > h4 > a')
    for e in title:
        text = e.text
        mod1 = text[2:]
        titleList.append(mod1)
        cnt+=1

    company = driver.find_elements_by_css_selector('div.list_tag_box > span.on > a')
    for e in company:
        companyList.append(e.text)

    link = driver.find_elements_by_css_selector('#stockNewsContentUl > li.news_list > div.list_info_box > h4 > a')
    for e in link:
        url = e.get_attribute('href')
        linkList.append(url)
        a = Article(url, language = 'ko')
        if(a):
            a.download()
            a.parse()
            news = a.text
            if(news.find("\n")):
                mod1 = news.replace("\n"," ")
                newsList.append(mod1)
            else: newsList.append(news)
    
    for e in newsList:
        sumList.append(load(e))

    img = driver.find_elements_by_css_selector('div.list_img_box > a > img')
    for e in img: 
        imgList.append(e.get_attribute('src'))

    price = driver.find_elements_by_css_selector('div.real_time_stock_price_div.tabView.tabViewOn > div')
    for e in price:
        text = e.text
        mod1 = text.replace("\n", "  ", 1)
        if (mod1.find("+")):
            mod2 = mod1.replace("+", " +", 1)
        elif(mod2.find("-")):
            mod2 = mod1.replace("-", ' -', 1)
        priceList.append(mod2)

    trend = driver.find_elements_by_css_selector('div.list_info_box > h4 > a > i > span')
    for e in trend: 
        trendList.append(e.text)
        if(e.text == '긍정'): colorList.append('red')
        elif(e.text == '부정'): colorList.append('blue')
        elif(e.text == '중립'): colorList.append('black')


    for i in range(cnt):
        data.append({'title': titleList[i], 'company' : companyList[i], 'link' : linkList[i], 'img': imgList[i], 'price': priceList[i], 'trend': trendList[i], 'color': colorList[i], 'summary': sumList[i], 'news': newsList[i]})
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent="\t")
        

load('https://money-m.some.co.kr/news/domestic-stock')