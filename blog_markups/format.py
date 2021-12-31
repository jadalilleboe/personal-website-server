def format_markup(fname):
    with open(f'blog_markups\{fname}', 'r') as f:
        contents = f.read()
    format = ''
    for char in contents:
        if char == '\n':
            pass
        elif char == '"':
            format += '\\"'
        else:
            format += char
    print(format)

if __name__ == '__main__':
    format_markup('what_i_learned.html')