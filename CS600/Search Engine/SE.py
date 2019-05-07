from DataStructures import *
from PageCompare import *
from StopWords import *

while True:
    fresults = {}
    results_ranked = []

    print("Hello! Welcome to Boogle, your new search engine")
    print("Please input what you want to search:")
    Input = input()
    Input = Input.strip()
    if "done" in Input:
        break

    for word in Input.split():
        word= word.lower()
        word = re.sub('[^a-zA-Z0-9]+', '', word)
        if trie_stop.has_word(word):
            print("PLEASE DO NOT ENTER STOPWORDS")
            continue

        if links_trie.has_word(word):
            data = links_trie.get_character(word)

            try:
                word_results = fresults[word]
            except:
                fresults[word] = []
                word_results = fresults[word]
                #print(data)
            word_results.append(data)


    for key, value in fresults.items():
        for keys, values in value[0].items():
            found = True
            #print(keys,values)
            for xr in results_ranked:
                if xr[0] == keys:
                    xr[1] += values
                    print(xr[0], xr[2])
                    found = False
                    break
            if found:
                results_ranked.append([keys, values])

    #for x,y in results_ranked:
    #    print(x,y)
    #results_ranked.sort(sort_on_second(key1,value1))
    if trie_stop.has_word(word):
        print("TRY AGAIN")
    else:
         print("Boogle has found these results along with its occurences: ")
         for final_result in results_ranked:
             print(final_result)
