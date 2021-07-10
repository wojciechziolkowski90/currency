#currency

## THE STORY OF ASYNCHRONOUS TECHNIC IN JS
1. Callback -funkcja wywołania zwrotnego,
 Callback hell- (callback nie może nic zwracać)
2. Promise


# Execution model
## Parts
1. Memory
2. Global Execution Context
3. Local Execution Context
4. CallStack
5. Event Loop
6. Microtask queue
7. Callback queue
8. Host functionality
### Memory
- storing data from application like variables, function declararion.
### Global Execution Context
- execute instractions from code file
### Local Execution Context
- created after function invocation
### CallStack
- data structure (first in, last out)
- pointer for engine with information in which scope engine is
### Event Loop
- infinite loop with 4 ifs.
- IFs:
  - callstack is empty
  - global execution context is done
  - microtask queue is empty
  - callback queue is empty
### Microtask queue
- data structure (first in, first out)
- storing promises for executing
### Callback queue
- data structure (first in, first out)
- storing callbacks for executing
### Host functionality
- JS doesn`t have functionality like Timer, XHR and so on, thats why host needs handle some features