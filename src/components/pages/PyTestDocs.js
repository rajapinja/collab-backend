import React from 'react';
import './PyTestDocs.css';
import Section from './SectionPTD';

function PyTestDocs() {
  return (
    <div className="ptd">
      <h2>Pytest Documentation</h2>
      <div className="content-ptd">
      <Section
          title="Pytest Overview"
          content="Pytest is a popular testing framework for Python that simplifies the process of writing and running tests."
        />
        <Section
          title="Key Features of Pytest"
          content={`Easy to Write Tests: Pytest allows writing simple and scalable test cases with minimal boilerplate code. Tests are written as functions, making them straightforward and easy to understand.\n\n
            Automatic Test Discovery: Pytest automatically discovers test files and test functions within those files. By default, it looks for files matching the pattern test_*.py or *_test.py.\n\n
            Fixtures: Pytest fixtures provide a way to set up test environments and tear them down after tests are run. Fixtures can be reused across multiple test functions, helping to keep your tests DRY (Don't Repeat Yourself).\n\n
            Parametrized Testing: Pytest allows you to run the same test function with different inputs using parametrization, which helps in testing multiple scenarios with a single test function.\n\n
            Assertions: Pytest comes with built-in assertion introspection, meaning that when an assertion fails, pytest provides a detailed explanation of the failure, making debugging easier.\n\n
            Plugins and Extensions: Pytest has a rich ecosystem of plugins that can extend its functionality. Some popular plugins include pytest-cov for coverage reporting, pytest-xdist for parallel execution, and pytest-mock for mocking.`}
        />
        <Section
          title="Writing Tests"
          content={`Here’s an example of a simple test using pytest:\n\n
            # test_sample.py\n
            def test_addition():\n
              assert 1 + 1 == 2\n\n
            def test_subtraction():\n
              assert 2 - 1 == 1`}
        />
        <Section
          title="Running Tests"
          content="To run tests, you typically execute the `pytest` command in the terminal:\n\n$ pytest"
        />
        <Section
          title="Using Fixtures"
          content={`Fixtures are used to set up a test environment. Here’s an example of using a fixture:\n\n
            import pytest\n\n
            @pytest.fixture\n
            def sample_data():\n
              return {"key": "value"}\n\n
            def test_using_fixture(sample_data):\n
              assert sample_data["key"] == "value"`}
        />
        <Section
          title="Parametrized Tests"
          content={`Parametrized tests allow you to run a test function with different sets of parameters:\n\n
            import pytest\n\n
            @pytest.mark.parametrize("input, expected", [\n
              (1 + 1, 2),\n
              (2 * 2, 4),\n
              (3 - 1, 2)\n
            ])\n
            def test_math_operations(input, expected):\n
              assert input == expected`}
        />
        <Section
          title="Assertions and Reporting"
          content={`Pytest provides detailed information about failures. For example:\n\n
            def test_failure():\n
              assert 1 == 2\n\n
            Running this test will give an output indicating the exact failure.`}
        />
        <Section
          title="Plugins and Extensions"
          content={`You can extend pytest with various plugins. For instance, to measure test coverage, you can use pytest-cov:\n\n
            $ pip install pytest-cov\n
            $ pytest --cov=yourmodule\n\n
            This command will generate a coverage report for your module.`}
        />
        <Section
          title="Pytest Overview"
          content="Pytest is a popular testing framework for Python that simplifies the process of writing and running tests."
        />
        <Section
          title="Writing Tests"
          content={`Here’s an example of a simple test using pytest:\n\n
            # test_sample.py\n
            def test_addition():\n
              assert 1 + 1 == 2\n\n
            def test_subtraction():\n
              assert 2 - 1 == 1`}
        />
        <Section
          title="Running Tests"
          content="To run tests, you typically execute the `pytest` command in the terminal:\n\n$ pytest"
        />
        <Section
          title="Using Fixtures"
          content={`Fixtures are used to set up a test environment. Here’s an example of using a fixture:\n\n
            import pytest\n\n
            @pytest.fixture\n
            def sample_data():\n
              return {"key": "value"}\n\n
            def test_using_fixture(sample_data):\n
              assert sample_data["key"] == "value"`}
        />
        <Section
          title="Parametrized Tests"
          content={`Parametrized tests allow you to run a test function with different sets of parameters:\n\n
            import pytest\n\n
            @pytest.mark.parametrize("input, expected", [\n
              (1 + 1, 2),\n
              (2 * 2, 4),\n
              (3 - 1, 2)\n
            ])\n
            def test_math_operations(input, expected):\n
              assert input == expected`}
        />
        <Section
          title="Assertions and Reporting"
          content={`Pytest provides detailed information about failures. For example:\n\n
            def test_failure():\n
              assert 1 == 2\n\n
            Running this test will give an output indicating the exact failure.`}
        />
        <Section
          title="Plugins and Extensions"
          content={`You can extend pytest with various plugins. For instance, to measure test coverage, you can use pytest-cov:\n\n
            $ pip install pytest-cov\n
            $ pytest --cov=yourmodule\n\n
            This command will generate a coverage report for your module.`}
        />
      </div>
    </div>
  );
}

export default PyTestDocs;
