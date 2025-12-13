'use client'
import React, { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description')

  return (
    <div className="mt-[64px] lg:mt-[96px] mb-[58px] w-full">
      {/* Tab headers */}
      <div className="flex border-gray-200 border-b">
        <button
          className={`px-4 py-2 lg:text-sm text-[13px] font-medium focus:outline-none ${
            activeTab === 'description'
              ? 'border-b-2 border-[#634c9f] text-[#634c9f]'
              : 'text-[#4B5563] hover:text-[#634c9f]'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`ml-4 px-4 py-2 lg:text-sm text-[13px] font-medium focus:outline-none ${
            activeTab === 'reviews'
              ? 'border-b-2 border-[#634c9f] text-[#634c9f]'
              : 'text-[#4B5563] hover:text-[#634c9f]'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {activeTab === 'description' && (
          <div className="space-y-[20px] text-[#4B5563] text-[12px] lg:text-sm">
            <p className='w-full lg:w-[1284px] xl:w-[1323.62px] h-auto lg:h-[68px]' >
               Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu
                accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
            </p>
            <p className='w-full lg:w-[1290px] xl:w-[1340.9px] h-auto lg:h-[92px]'>
                Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
                maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut
                arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
                egestas purus commodo vel.
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-[#4B5563] text-[12px] lg:text-sm leading-relaxed">
            <h2 className="mb-2 font-semibold text-sm">Customer Reviews</h2>
            <ul className="space-y-4">
              <li>
                <strong>Jane Doe</strong>: ⭐⭐⭐⭐⭐<br />
                &quot;Absolutely love this product! Great value for money.&quot;
              </li>
              <li>
                <strong>John Smith</strong>: ⭐⭐⭐⭐<br />
                &quot;Works well, though the delivery was a bit late.&quot;
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>

  )
}

export default Tabs

