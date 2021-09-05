# -*- coding: utf-8 -*-

import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time

def summarize(news):
    driver = webdriver.Chrome(executable_path='chromedriver')
    driver.get('http://112.175.32.78/home')
    input = driver.find_element_by_xpath('//*[@id="sum"]')
    input.send_keys(news)
    submit = driver.find_element_by_xpath('//*[@id="root"]/div/section[3]/div[1]/form/button')
    submit.submit()
    time.sleep(5);
    sum = driver.find_element_by_xpath('//*[@id="right_div"]/div[2]/p')
    summary = sum.text
    for i in range(3):
        start = summary.find('(score : ')
        end = summary.find(')', start)
        summary = summary[:start] + summary[(end+1):]
    driver.quit()
    return summary
