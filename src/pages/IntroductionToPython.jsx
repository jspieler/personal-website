import React from 'react';

import { CodeBlock, dracula } from 'react-code-blocks';

import { Article } from '../components/articles/Article';
import { ExternalLink } from '../components/articles/ExternalLink';
import { InlineCode } from '../components/articles/InlineCode';

const IntroductionToPython = () => {
  return (
    <main className="main">
      <Article
        title={'Introduction To Python'}
        subtitle={'Yet Another Python Guide?'}
      >
        <p>
          The following introduction to Python serves as additional,
          supplementary material to the lecture of the same name.
          Since it is a comprehensive, stand-alone introduction, it
          can also be used to learn the basics of Python on your own.
          The concept of this introduction is inspired by the
          JavaScript reference in the{' '}
          <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">
            MDN Web Docs
          </ExternalLink>{' '}
          which I really like because it provides good explanations
          along with code sandboxes that allow you to play directly
          with the code while learning. I would encourage you to do
          exactly that.
        </p>
        <p>The lecture slides are also available here.</p>
        <h3 id="what-is-python-and-why-you-should-learn-it">
          What Is Python and Why You Should Learn It
        </h3>
        <p>
          <ExternalLink href="https://www.python.org/">
            Python
          </ExternalLink>{' '}
          is a high-level programming language created by Guido van
          Rossum. It was released in 1991. Although images of snakes
          are often associated with Python, the name is actually
          derived from Guido van Rossum's favorite TV show, "Monty
          Python's Flying Circus". Python is an object-oriented
          programming language which is available on a wide variety of
          systems and can be used for a lot of different applications.
          The current version is Python 3, which will be the focus of
          the following explanations. Python is designed to be a
          beginner-friendly yet powerful programming language. In
          recent years, Python has gained increasing popularity,
          especially due to well-known and robust frameworks designed
          for scientific computing, artificial intelligence, and data
          science. Examples of such frameworks include{' '}
          <ExternalLink href="https://numpy.org/">Numpy</ExternalLink>
          ,{' '}
          <ExternalLink href="https://pandas.pydata.org/">
            Pandas
          </ExternalLink>
          ,{' '}
          <ExternalLink href="https://pytorch.org/">
            PyTorch
          </ExternalLink>{' '}
          or{' '}
          <ExternalLink href="https://www.tensorflow.org/">
            TensorFlow
          </ExternalLink>
          . Python is also commonly used for automation, prototyping,
          and even web development.
        </p>
        <p>
          Unlike many other programming languages, Python statements
          do not require termination with a special character. The
          Python interpreter identifies the end of a statement through
          the presence of a newline, generated by pressing the
          "Return" key on the keyboard. We will delve into multi-line
          statements in subsequent sections. Another crucial point to
          note is that Python relies on indentation instead of
          delimiters like curly braces. While the specific amount of
          indentation doesn't hold significance, it must remain
          consistent within a given depth of a loop or conditional
          statement. Additionally, statements that are not intended to
          be indented must start from the first column. However,
          adhering to the convention outlined in{' '}
          <ExternalLink href="https://peps.python.org/pep-0008/">
            PEP 8
          </ExternalLink>
          , it is recommended to use 4 spaces for indentation, a
          practice we'll explore further in upcoming discussions.
        </p>

        <h3 id="how-to-invoke-python-code">
          How To Invoke Python Code
        </h3>
        <p>
          To get started with running Python code on your computer,
          you'll need to install a{' '}
          <ExternalLink href="https://www.python.org/downloads/">
            Python interpreter
          </ExternalLink>{' '}
          which is available for Windows, Linux and Mac OS.
          Alternatively, you can also use{' '}
          <ExternalLink href="https://docs.conda.io/en/latest/">
            Conda
          </ExternalLink>{' '}
          (or one of its variations like MicroConda or Mamba). We'll
          talk more about these options when we discuss virtual
          environments in a moment.
        </p>
        <p>
          Once Python is installed on your system, there are two main
          ways to start using it. The first method is by opening your
          shell or command prompt and typing "python". This will
          launch the Python interpreter, and you'll see something like
          this:
          <CodeBlock
            text={`Python 3.11.3 (main, Jun  5 2023, 09:32:32) [GCC 13.1.1 20230429] on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>>`}
            language={'bash'}
            showLineNumbers={false}
            theme={dracula}
          />
          The three greater-than signs (&gt;&gt;&gt;) are prompts that
          indicate you can type your commands below them. When you
          press "Enter", Python will execute your command. If you type
          a command like Python's <InlineCode>print()</InlineCode>,
          the result will show up on the screen, like this:
          <CodeBlock
            text={`>>> print("Hello World")\nHello World`}
            language={'bash'}
            showLineNumbers={false}
            theme={dracula}
          />
          For longer programs, you can use your preferred text editor
          or Integrated Development Environment (IDE) to write your
          Python code. The common file extension for Python files is
          ".py". To run your program, type "python" followed by the
          name or path of your file. Most modern IDEs also offer a
          "run" button that you can click.
        </p>
        <p>
          One of the great advantages of Python is its easy-to-use
          libraries and external packages. Since many people use
          Python, there's a wide variety of pre-built packages
          available for many different tasks. The Python Package Index
          (<ExternalLink href="https://pypi.org/">PyPI</ExternalLink>)
          is a collection of software for Python that offers numerous
          packages. You can install Python packages from PyPI using a
          package management tool called "pip".
        </p>
        <p>
          However, Python is not great at dependency management. This
          is why nearly every Python user recommends to use virtual
          environments. Virtual environments are a Python tool for
          dependency management and project isolation. They provide a
          simple solution for a lot of potential problems by helping
          you to:
          <div>
            <ul>
              <li>Resolve dependency issues</li>
              <li>Create self-contained and reproducible projects</li>
              <li>Avoid system pollution</li>
              <li>Install packages without admin rights</li>
            </ul>
          </div>
          There are various approaches to creating a virtual
          environment. One option is to use{' '}
          <ExternalLink href="https://docs.python.org/3/library/venv.html">
            venv
          </ExternalLink>
          , a built-in tool in Python. External tools like virtualenv
          or Conda are also commonly used. Conda provides an
          alternative package and environment management approach. It
          not only enables easy creation of virtual environments with
          different Python versions but also introduces an additional
          feature set. It's worth noting that Conda is a separate
          project and is unrelated to pip. It uses an alternative
          package index maintained by the Anaconda project instead of
          PyPI. Conda packages can be installed using the command
          "conda install". As an alternative,{' '}
          <ExternalLink href="https://www.docker.com/">
            Docker
          </ExternalLink>{' '}
          can also be used to create a containerized Python
          development environment. Docker allows you to package your
          Python application along with its dependencies and system
          configurations, ensuring consistency across different
          environments.
        </p>

        <h3 id="variables">Variables</h3>
        <p>
          <iframe
            src="https://trinket.io/embed/python/3d8d7ce66b"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            // can we somehow set the color scheme?
          ></iframe>
        </p>

        <h3 id="data-types">Data Types</h3>
        <p>...</p>

        <h3 id="control-structure">Control Structures</h3>
        <p>...</p>

        <h3 id="data-structures">Data Structures</h3>
        <p>...</p>

        <h4>Lists</h4>
        <p>
          Lists serve as a fundamental tool in Python for holding
          collections of objects that are indexed using numerical
          positions. These objects within a list can span various
          types, including numbers, strings, functions, user-defined
          objects, and even other lists. This versatility enables the
          creation of complex data structures with ease. To define a
          list in Python, enclose a sequence of elements you want
          within square brackets, separated by commas. To initialize
          an empty list, simply use square brackets without any
          elements inside. Notably, the items in a list can have
          different data types. Accessing individual elements within a
          list is achieved by employing square brackets after the
          list's name, specifying the index of the desired element.
          It's important to remember that Python employs zero-based
          indexing, meaning the first element corresponds to index 0.
          In the case of nested lists (lists within lists), you can
          utilize additional sets of square brackets to access
          individual elements. To get the number of elements within a
          list, Python offers the built-in{' '}
          <InlineCode>len()</InlineCode> function.
          <iframe
            src="https://trinket.io/embed/python/179b14e949"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
          ></iframe>
        </p>
        <h5>List Indexing and Slicing</h5>
        <p>
          The slicing operations introduced in the section about
          strings are equally applicable to lists, with a particularly
          useful extension. In addition to utilizing slicing to
          extract a section of a list, you can employ slicing to
          assign values to elements within a list, indicated by a
          slice positioned on the left side of an equal sign. This
          distinction arises from the fact that lists are mutable
          objects, while strings are immutable. When assigning values
          using this approach, if the count of elements in the list on
          the right side of the assignment doesn't match the number of
          elements suggested by the slice's subscript, the list will
          automatically adjust its size to accommodate the assignment.
          Conversely, assignments performed via a single subscript
          will consistently maintain the list's length. Slices further
          offer the capability to remove elements from a list.
          Alternatively, the <InlineCode>del</InlineCode> statement
          can be employed to remove items from a list. To use the{' '}
          <InlineCode>del</InlineCode> statement, specify the element
          or slice of the list that requires deletion. Another
          important use of slices is to make a separate modifiable
          copy of a list. We will discuss later why this is important.
          In this case, a slice is created without a starting and
          ending index.
        </p>
        <iframe
          src="https://trinket.io/embed/python/1c6c2fe35d"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
        <h5>List Operators</h5>
        <h6>Concatenation</h6>
        <p>
          To merge the contents of two lists, the plus sign is used to
          concatenate them. The outcome is a unified list whose length
          equals the sum of both original lists' lengths. This new
          list contains all the elements from the first list followed
          by all the elements from the second list. List concatenation
          only works when combining two lists. To add a scalar to the
          end of a list, you either need to surround the scalar with
          square brackets or use the <InlineCode>append()</InlineCode>{' '}
          method.
        </p>
        <iframe
          src="https://trinket.io/embed/python/ef8c8f064f"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
        <h6>Repetition</h6>
        <p>
          As for strings, the asterisk is overloaded for lists to
          serve as a repetition operator, Applying repetition to a
          list results in a single list with the elements of the
          original list repeated as many times as specified. A list
          consisting other lists can be created by surrounding a list
          to be repeated with an extra set of square brackets.
        </p>
        <iframe
          src="https://trinket.io/embed/python/74423edc47"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
        <h6>
          The <InlineCode>in</InlineCode> Operator
        </h6>
        <p>
          The <InlineCode>in</InlineCode> operator provides an
          extremely convenient technique for determining whether a
          specific value resides within a list. These evaluations are
          structured by positioning a value on the left side of the
          operator and a list on the right side. The outcome is either{' '}
          <InlineCode>True</InlineCode> or{' '}
          <InlineCode>False</InlineCode>, rendering it highly suitable
          for conditional statements. It's important to exercise
          caution when constructing expressions employing the{' '}
          <InlineCode>in</InlineCode> operator, as an exact match in
          both type and value is necessary for a{' '}
          <InlineCode>True</InlineCode> result. Moreover, the{' '}
          <InlineCode>in</InlineCode> operator works seamlessly with
          expressions that evaluate to elements within a list.
        </p>
        <iframe
          src="https://trinket.io/embed/python/be273e1259"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
        <h6>List Comprehension</h6>
        <p>
          List comprehensions are a concise and elegant way to create
          lists in Python. They allow you to generate a new list by
          applying an expression to each item in an existing iterable
          (like a list, tuple, or range) and optionally applying a
          condition to filter the items. List comprehensions not only
          make your code more compact, but they also enhance its
          readability by encapsulating complex operations in a
          comprehensible format.
        </p>
        <iframe
          src="https://trinket.io/embed/python/684e868e0f"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
        <h6>Functions and Methods for Lists</h6>
        <p>
          We already learnt that the <InlineCode>len()</InlineCode>{' '}
          function will return the number of elements in a list. But
          there are more built-in functions and methods for lists in
          Python. For a single list input, the{' '}
          <InlineCode>min()</InlineCode> function extracts the
          smallest element from the list, while the{' '}
          <InlineCode>max()</InlineCode> function retrieves the
          largest. To append a single element at the end of a list,
          the <InlineCode>append()</InlineCode> method can be used. If
          you need to add several elements to the end of a list,
          either the concatenation operator or the{' '}
          <InlineCode>extend()</InlineCode>method can be employed. If
          your intent is to insert an element at a position other than
          the end of the list, the <InlineCode>insert()</InlineCode>{' '}
          method proves useful. This method demands two arguments: the
          index for the insertion location and the item itself.
          Notably, a single element can be inserted using{' '}
          <InlineCode>insert()</InlineCode>, while for multiple
          insertions, slicing can be utilized. When the objective
          involves eliminating an item from a list based on its value,
          the <InlineCode>remove()</InlineCode> method proves
          invaluable. It removes only the initial occurrence of the
          value within the list. Both the{' '}
          <InlineCode>reverse()</InlineCode> and{' '}
          <InlineCode>sort()</InlineCode> methods operate in place,
          meaning they change the original order of elements within
          the list. If preservation of the initial order is essential,
          it's advisable to generate a copy of the list. By default,
          the <InlineCode>sort()</InlineCode> method sorts its numeric
          arguments in numerical order and string arguments in
          alphabetical order. Recall that lists can contain arbitrary
          objects, so <InlineCode>sort()</InlineCode> needs to be very
          flexible. In general, it sorts scalar numeric values before
          scalar string values and lists by first comparing their
          initial elements and continuing through the available list
          elements until one list differs from the other. The{' '}
          <InlineCode>count()</InlineCode> method accepts a single
          argument representing the value to be located and calculates
          the frequency of that value within the list. On the other
          hand, the <InlineCode>index()</InlineCode> method offers the
          index (subscript) of the first occurrence of a specified
          value.
        </p>
        <iframe
          src="https://trinket.io/embed/python/697878d467"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </Article>
    </main>
  );
};

export { IntroductionToPython };
