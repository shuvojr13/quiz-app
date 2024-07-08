import React from 'react'

const Instruction = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 p-8">
      
      <div className="flex flex-col rounded-lg border border-violet-200 shadow-lg p-4 w-1/3">
        <h4 className="text-xl text-center bg-indigo-900 text-white  p-2 rounded font-semibold mb-2">গনিত বিষয়ক কুইজ</h4>
        <p className="text-gray-600 mb-4 p-2 bg-gray-100 m-1 rounded">গণিত কুইজ হলো একটি শিক্ষামূলক কার্যক্রম যেখানে বিভিন্ন গাণিতিক প্রশ্নের মাধ্যমে শিক্ষার্থীদের গণিতের জ্ঞান ও দক্ষতা মূল্যায়ন করা হয়। এই কুইজগুলো সাধারণত বিভিন্ন পর্যায়ে অনুষ্ঠিত হয়, যেমন প্রাথমিক, মাধ্যমিক, এবং উচ্চ মাধ্যমিক পর্যায়ে। গণিত কুইজ শিক্ষার্থীদের সমস্যার সমাধান করার দক্ষতা, দ্রুত চিন্তা করার ক্ষমতা এবং গাণিতিক ধারণাগুলোকে প্রয়োগ করার ক্ষমতা বৃদ্ধি করে।</p>
        <button className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600">
          বিস্তারিত জানুন
        </button>
      </div>

      
      <div className="flex flex-col rounded-lg border border-violet-200 shadow-lg p-4 w-1/3">
        <h4 className="text-xl text-center bg-indigo-900 text-white  p-2 rounded font-semibold mb-2">বিজ্ঞান ভিত্তিক কুইজ</h4>
        <p className="text-gray-600 mb-4 p-2 bg-gray-100 m-1 rounded">বিজ্ঞান ভিত্তিক কুইজ হলো এমন একটি শিক্ষামূলক কার্যক্রম যেখানে বিভিন্ন বিজ্ঞানের শাখা থেকে প্রশ্ন করে শিক্ষার্থীদের জ্ঞান ও দক্ষতা মূল্যায়ন করা হয়। এ ধরনের কুইজ সাধারণত প্রাথমিক, মাধ্যমিক, উচ্চ মাধ্যমিক এবং বিশ্ববিদ্যালয় পর্যায়ে অনুষ্ঠিত হয়। বিজ্ঞান ভিত্তিক কুইজ শিক্ষার্থীদের সমস্যা সমাধান করার দক্ষতা, দ্রুত চিন্তা করার ক্ষমতা এবং বৈজ্ঞানিক ধারণাগুলোর প্রয়োগ করার ক্ষমতা বাড়িয়ে তোলে।</p>
        <button className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600">
        বিস্তারিত জানুন
        </button>
      </div>

      
      <div className="flex flex-col rounded-lg border border-violet-200 shadow-lg p-4 w-1/3">
        <h4 className="text-xl text-center bg-indigo-900 text-white  p-2 rounded font-semibold mb-2">প্রযুক্তি বিষয়ক কুইজ</h4>
        <p className="text-gray-600 mb-4 p-2 bg-gray-100 m-1 rounded">প্রযুক্তি বিষয়ক কুইজ হলো এমন একটি শিক্ষামূলক কার্যক্রম যেখানে বিভিন্ন প্রযুক্তিগত জ্ঞান ও দক্ষতা মূল্যায়ন করা হয়। এটি শিক্ষার্থীদের এবং পেশাদারদের জন্য উপযোগী, যারা তথ্যপ্রযুক্তি, কম্পিউটার বিজ্ঞান, সফটওয়্যার ডেভেলপমেন্ট, হার্ডওয়্যার, এবং অন্যান্য প্রযুক্তিগত ক্ষেত্র সম্পর্কে জানতে আগ্রহী। এই কুইজগুলো সাধারণত বিভিন্ন পর্যায়ে অনুষ্ঠিত হয় এবং শিক্ষার্থীদের প্রযুক্তিগত ধারণা ও দক্ষতা বৃদ্ধি করে।</p>
        <button className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-600">
        বিস্তারিত জানুন
        </button>
      </div>
    </div>
  )
}

export default Instruction