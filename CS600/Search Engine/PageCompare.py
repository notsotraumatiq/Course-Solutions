#Method to rank different pages
def page_compare(page_a, page_b):
    if page_a[1] > page_bb[1]:
        return 1
    if page_a[1] < page_b[1]:
        return -1
    if page_a[1] == page_b[1]:
        return 0

