import selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

def load(news):
    driver = webdriver.Chrome(executable_path='chromedriver')
    driver.maximize_window()
    driver.get('http://112.175.32.78/home')
    WebDriverWait(driver,timeout=5).until(EC.presence_of_element_located((By.TAG_NAME, "textarea")))
    input = driver.find_element_by_xpath('//*[@id="sum"]')
    input.send_keys(news)
    WebDriverWait(driver,timeout=5).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/section[3]/div[1]/form/button')))
    submit = driver.find_element_by_xpath('//*[@id="root"]/div/section[3]/div[1]/form/button')
    submit.click()
    WebDriverWait(driver,timeout=5).until(EC.presence_of_element_located((By.XPATH, '//*[@id="right_div"]/div[2]/p')))
    sum = driver.find_element_by_xpath('//*[@id="right_div"]/div[2]/p')
    return sum.text

