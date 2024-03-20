import React from "react";
import "./Table.css";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { ImLink } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";

const headdata = [
  {
    _id: 1,
    lotno: "Lot No.",
    diereceipt: "Die Receipt",
    day: "v",
    bumpin: "Bump In",
    day: "v",
    bumpout: "Bump Out",
    day: "v",
    probein: "Probe In",
    day: "v",
    probeout: "Probe Out",
    day: "v",
    assemblyin: "Assembly In",
    day: "v",
    assemblyout: "Assembly Out",
    day: "v",
    testin: "Test In",
    day: "v",
    testout: "Test Out",
    day: "v",
    shipout: "Ship Out",
  },
];

const columndata = [
  {
    _id: 1,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 2,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 3,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "1",
    probein: "22-05-09",
    day4: "19",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 4,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 5,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 6,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 7,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 8,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 9,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 10,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 11,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
  {
    _id: 12,
    lotno: "000009",
    diereceipt: "22-05-09",
    day1: "15",
    bumpin: "22-05-09",
    day2: "7",
    bumpout: "22-05-09",
    day3: "25",
    probein: "22-05-09",
    day4: "5",
    probeout: "22-05-09",
    day5: "5",
    assemblyin: "22-05-09",
    day6: "5",
    assemblyout: "22-05-09",
    day7: "5",
    testin: "22-05-09",
    day8: "5",
    testout: "22-05-09",
    day9: "5",
    shipout: "22-05-09",
  },
];

const Table = () => {
  return (
    <>
      {/* this is the top box which contain lots status tracking and input fields  */}
      <main className="main_table_top">
        <p>Lots Status Tracking</p>

        <div className="main_table_top_content">
          <div className="input">
            <input type="text" placeholder="Search" />
            <div>
              <IoSearch />
            </div>
          </div>

          <div className="input">
            <input type="text" placeholder="Select Dates" />
            <div>
              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="input">
            <input type="text" placeholder="Show/Hide Columns" />
            <div>
              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="input2">
            <MdDelete />
          </div>
          <div className="input2">
            <IoMdAdd />
          </div>
          <div className="input2">
            <ImLink />
          </div>
        </div>

        {/* this is the top box which contain lots status tracking and input fields. This is for mobile and tab  */}
        <div className="main__table_mobile_top">
          <div className="input">
            <input type="text" placeholder="Search" />
            <div>
              <IoSearch />
            </div>
          </div>

          <div className="input">
            <input type="text" placeholder="Select Dates" />
            <div>
              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="input">
            <input type="text" placeholder="Show/Hide Columns" />
            <div>
              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="btn_group">
            <div className="input2">
              <MdDelete />
            </div>
            <div className="input2">
              <IoMdAdd />
            </div>
            <div className="input2">
              <ImLink />
            </div>
          </div>
        </div>
      </main>

      {/* the main table box which has box shadow */}
      <div className="main_container">
        <main className="main_table">
          <div>
            {/* this is the table head */}
            {headdata.map((c) => (
              <div className="main_table_head" key={c._id}>
                <div className="main_table_head_sort">
                  <div>{c.lotno}</div>
                  <div>
                    <IoMdArrowDropdown />
                  </div>
                </div>
                <div>
                  <div className="main_table_head_sort">
                    <div>{c.diereceipt}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>

                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.bumpin}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.bumpout}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.probein}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.probeout}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.assemblyin}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.assemblyout}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.testin}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.testout}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                  <div className="day_h">
                    <div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="main_table_head_sort">
                    <div>{c.shipout}</div>
                    <div>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* this is the table rows and inside it has columns */}
            {columndata.map((c) => (
              <div className="main_table_row" key={c._id}>
                <div>{c.lotno}</div>
                <div
                  style={{
                    background: "var(--column-color-1)",
                    color: "#0D1D7E",
                  }}
                >
                  {c.diereceipt}
                  <div className="day">
                    <div>
                      <div>{c.day1} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-2)",
                    color: "#FB2B0F",
                  }}
                >
                  {c.bumpin}
                  <div className="day">
                    <div>
                      <div>{c.day2} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-2)",
                    color: "#FB2B0F",
                  }}
                >
                  {c.bumpout}
                  <div className="day">
                    <div>
                      <div>{c.day3} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-3)",
                    color: "#F47240",
                  }}
                >
                  {c.probein}
                  <div className="day">
                    <div>
                      <div>{c.day4} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-3)",
                    color: "#F47240",
                  }}
                >
                  {c.probeout}
                  <div className="day">
                    <div>
                      <div>{c.day5} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-4)",
                    color: "orangered",
                  }}
                >
                  {c.assemblyin}
                  <div className="day">
                    <div>
                      <div>{c.day6} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-4)",
                    color: "orangered",
                  }}
                >
                  {c.assemblyout}
                  <div className="day">
                    <div>
                      <div>{c.day7} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-5)",
                    color: "#1BC39B",
                  }}
                >
                  {c.testin}
                  <div className="day">
                    <div>
                      <div>{c.day8} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: "var(--column-color-5)",
                    color: "#1BC39B",
                  }}
                >
                  {c.testout}
                  <div className="day">
                    <div>
                      <div>{c.day9} day</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    borderRight: "none",
                    background: "var(--column-color-6)",
                    color: "#16E6F3",
                  }}
                >
                  {c.shipout}
                </div>
              </div>
            ))}
          </div>
        </main>

        <div className="main_table_pagination">
          <div>
            <p>Showing</p>
            <div>1 -24</div>
            <p>of 124</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
