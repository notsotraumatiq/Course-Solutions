

class TrieNode:
    def __init__(self, labels=None, character={}):
        self.labels = labels
        self.character = character
        self.leaf = {}

    def add_child(self, key, character={}):
        if not isinstance(key, TrieNode):
            self.leaf[key] = TrieNode(key, character)
        else:
            self.leaf[key.labels] = key

    def __getitem__(self, key):
        return self.leaf[key]


class Trie:
    def __init__(self):
        self.head = TrieNode()

    def __getitem__(self, key):
        return self.head.leaf[key]

    def add(self, word, where=''):
        current_node = self.head
        word_finished = True

        for i in range(len(word)):
            if word[i] in current_node.leaf:
                current_node = current_node.leaf[word[i]]
            else:
                word_finished = False
                break

        if not word_finished:
            while i < len(word):
                current_node.add_child(word[i])
                current_node = current_node.leaf[word[i]]
                i += 1

        if not word_finished:
            current_node.character = {where: 1}
        else:
            try:
                count = current_node.character.get(where)
            except:
                current_node.character[where] = 0
                count = current_node.character.get(where)
            if count:
                count += 1
                current_node.character[where] = count

    def has_word(self, word):
        if not word:
            raise ValueError('Trie.has_word requires a not-Null string')
        elif word == '':
            return False

        current_node = self.head
        exists = True
        for letter in word:
            if letter in current_node.leaf:
                current_node = current_node.leaf[letter]
            else:
                exists = False
                break

        if exists:
            if len(current_node.character) == 0:
                exists = False

        return exists

    def start_with_prefix(self, prefix):
        """ Returns a list of all words in tree that start with prefix """
        words = list()
        if not prefix:
            raise ValueError('Requires not-Null prefix')

        top_node = self.head
        for letter in prefix:
            if letter in top_node.leaf:
                top_node = top_node.leaf[letter]
            else:
                return words

        if top_node == self.head:
            queue = [TrieNode for key, TrieNode in top_node.leaf.iteritems()]
        else:
            queue = [top_node]

        while queue:
            current_node = queue.pop()
            if current_node.character:
                words.append(current_node.character)

            queue = [TrieNode for key, TrieNode in current_node.leaf.iteritems()] + queue

        return words

    def get_character(self, word):
        if not self.has_word(word):
            raise ValueError('{} not found in trie'.format(word))

        current_node = self.head
        for letter in word:
            current_node = current_node[letter]

        return current_node.character
