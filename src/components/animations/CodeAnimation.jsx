import React from 'react';

const CodeAnimation = () => {
  return (
    <div className="absolute left-10 bottom-20 opacity-25 transform -rotate-6 hidden md:block">
      <pre className="text-xs text-primary-600 dark:text-primary-400 font-mono animate-code-scroll">
        {`// Machine Learning Algorithm
def train_neural_network(data):
  model = Sequential([
    Dense(128, activation='relu'),
    Dense(64, activation='relu'),
    Dense(num_classes, 'softmax')
  ])
  return model.fit(data)

// Quantum Algorithm
fn quantum_fourier_transform<T: Qubit>(
    register: &mut [T]
) -> Result<()> {
    for i in 0..register.len() {
        hadamard(register[i])?;
        for j in (i+1)..register.len() {
            controlled_phase(
                register[j],
                register[i],
                PI / 2.0_f64.powi(j-i)
            )?;
        }
    }
    Ok(())
}

// Distributed Systems
async function distributeComputation(
  nodes: Node[],
  task: Task
): Promise<Result> {
  const chunks = splitTask(task);
  const results = await Promise.all(
    nodes.map(node => 
      node.process(chunks)
    )
  );
  return combineResults(results);
}`}
      </pre>
    </div>
  );
};

export default CodeAnimation;