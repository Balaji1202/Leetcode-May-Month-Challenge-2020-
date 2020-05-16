// Note: This is not an actual trie ds

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.elements = [];
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.elements.push(word);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.elements.includes(word);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    for(let i = 0; i < this.elements.length; i++) {
        if(this.elements[i].startsWith(prefix)) {
           return true;
        }
    }
    return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
