from DataStructures import *
import re
import bs4
import requests

#Loading the stopwords into the data structure
trie_stop = Trie()
file_stop = open(r'C:\Users\Atiq\Documents\CS\CS 600\Search Engine Project\StopWords.txt', 'r')

if file_stop:
    for line in file_stop:
        for word in line.split():
            trie_stop.add(word.strip())

parselink = open(r'C:\Users\Atiq\Documents\CS\CS 600\Search Engine Project\Input.txt', 'r')
links_trie = Trie()


#Scraping data from the links and putting it inside the data structure
if parselink:
    for links in parselink:
        soup = bs4.BeautifulSoup(requests.get(links[:-1]).content, 'html.parser')

        for i_tag in soup.findAll('p'):
            for word in i_tag.get_text().split():
                word = word.lower()
                word = re.sub('[^a-zA-Z0-9]+', '', word)

                if word:
                    if word.strip() != "":
                        if trie_stop.has_word(word):
                            pass
                        else:
                            links_trie.add(word, links[:-1])
